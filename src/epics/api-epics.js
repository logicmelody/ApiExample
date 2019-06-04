import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import {
	switchMap,
	map,
	delay,
	takeUntil,
	filter,
} from 'rxjs/operators';

import {
} from '../actions/action-types';

export function apiEpic(action$) {
	return action$.pipe(
		switchMap(action => {
			return {
				type: ""
			};
		})
	);
}
