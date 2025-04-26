import { useState, useEffect } from 'react';

import API from './API.js';

const useLoad = (endpoint) => {
	// State -----------------------------------------
	const [records, setRecords] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// Handler ---------------------------------------
	const loadRecords = async (endpoint) => {
		const response = await API.get(endpoint);
		if (response.isSuccess) setRecords(response.result);
		setIsLoading(false);
	};

	useEffect(() => {
		loadRecords(endpoint);
	}, []);

	// Return ----------------------------------------
	return [records, setRecords, isLoading, loadRecords];
};

export default useLoad;
