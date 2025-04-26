import API_URL from './API_URL';

const API = {};

// Methods
API.get = (endpoint) => callFetch(endpoint, 'GET', null);
API.post = (endpoint, data) => callFetch(endpoint, 'POST', data);
API.put = (endpoint, data) => callFetch(endpoint, 'PUT', data);
API.delete = (endpoint) => callFetch(endpoint, 'DELETE', null);

const callFetch = async (endpoint, method, record) => {
	let requestObj = { method: method };
	if (record) {
		requestObj = {
			...requestObj,
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(record),
		};
	}

	try {
		let result = null;
		const endpointAddress = API_URL + endpoint;
		const response = await fetch(endpointAddress, requestObj);
		if (response.status !== 204) result = await response.json();
		return response.status >= 200 && response.status < 300
			? { isSuccess: true, result }
			: { isSuccess: false, message: `${result.message}` };
	} catch (error) {
		return { isSuccess: false, message: error.message };
	}
};

export default API;
