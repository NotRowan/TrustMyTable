import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const listeners = {}; // New: all hook instances will register a listener

const useStore = (key, initialRecord) => {
	const [record, setRecord] = useState(initialRecord);

	// Handlers
	const loadRecord = async () => {
		try {
			const recoveredJSON = await AsyncStorage.getItem(key);
			if (recoveredJSON != null) {
				const record = JSON.parse(recoveredJSON);
				setRecord(record);
			}
		} catch (error) {
			console.log('Error loading record');
		}
	};

	const saveRecord = async (newRecord) => {
		try {
			const encodedRecord = JSON.stringify(newRecord);
			await AsyncStorage.setItem(key, encodedRecord);
			setRecord(newRecord);
			// 🔥 New: broadcast update
			if (listeners[key]) {
				listeners[key].forEach((callback) => callback(newRecord));
			}
		} catch (error) {
			console.log('Error saving record');
		}
	};

	useEffect(() => {
		loadRecord();
		// Subscribe to future updates
		if (!listeners[key]) {
			listeners[key] = [];
		}
		const callback = (newRecord) => {
			setRecord(newRecord);
		};
		listeners[key].push(callback);

		return () => {
			// Cleanup on unmount
			listeners[key] = listeners[key].filter((cb) => cb !== callback);
		};
	}, []);

	return [record, saveRecord];
};

export default useStore;
