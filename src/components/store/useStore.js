import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useStore = (key, initialRecord) => {
	//State
	const [record, setRecord] = useState(initialRecord);
	//Handlers
	const loadRecord = async () => {
		try {
			const recoveredJSON = await AsyncStorage.getItem(key);

			if (recoveredJSON != null) {
				const record = JSON.parse(recoveredJSON);
				setRecord(record);
			}
		} catch (error) {
			Alert.alert('Error loading record');
		}
	};

	const saveRecord = async (newRecord) => {
		try {
			const encodedRecord = JSON.stringify(newRecord);
			await AsyncStorage.setItem(key, encodedRecord);
			setRecord(newRecord);
		} catch (error) {
			Alert.alert('Error saving record');
		}
	};

	useEffect(() => {
		loadRecord();
	}, []);
	//Return
	return [record, saveRecord];
};

export default useStore;
