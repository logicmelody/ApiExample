import { Map } from "immutable";
import {
	START_FETCH_DATA,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAILED,
} from '../actions/action-types';
import { LoadingStatusEnum } from '../utils/utils';

const INITIAL_STATE = Map({
	data: undefined,
	loadingStatus: LoadingStatusEnum.NONE,
	loadingStatusMessage: "",
});

export default function api(state = INITIAL_STATE, action) {
	switch (action.type) {
		case START_FETCH_DATA:
			return state
				.set("loadingStatus", LoadingStatusEnum.LOADING);

		case FETCH_DATA_SUCCESS:
			return state
				.set("loadingStatus", LoadingStatusEnum.SUCCESS)
				.set("data", action.data);

		case FETCH_DATA_FAILED:
			return state
				.set("loadingStatus", LoadingStatusEnum.FAILED)
				.set("loadingStatusMessage", action.error);

		default:
			return state;
	}
}
