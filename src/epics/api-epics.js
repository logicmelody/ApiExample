import { ofType } from 'redux-observable';
import { ajax } from "rxjs/ajax";
import {
	switchMap,
	map,
} from 'rxjs/operators';

import {
	START_FETCH_DATA,
} from '../actions/action-types';

import {
	fetchDataSuccess,
	fetchDataFailed,
} from '../actions/api-actions';

export function fetchDataEpic(action$) {
	return action$.pipe(
		ofType(START_FETCH_DATA),
		switchMap(action =>
			ajax({
				url: 'https://jsonplaceholder.typicode.com/posts/1',
			}).pipe(
				map(payload => payload.response),
				map(payload => fetchDataSuccess(payload)),
				catchError(error => [fetchDataFailed(error)])
			)
		)
	);
}
