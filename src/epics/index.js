import { combineEpics } from 'redux-observable';

import {
	fetchDataEpic,
} from './api-epics';

const epics = combineEpics(
	fetchDataEpic,
);

export default epics;
