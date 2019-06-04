import {
	START_FETCH_DATA,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAILED,
} from './action-types';

export function fetchData() {
	return {
		type: START_FETCH_DATA,
	};
}

export function fetchDataSuccess(data) {
	return {
		type: FETCH_DATA_SUCCESS,
		data,
	};
}

export function fetchDataFailed(error) {
	return {
		type: FETCH_DATA_FAILED,
		error,
	};
}
