import { combineEpics } from 'redux-observable';

import {
	apiEpic,
} from './api-epics';

const epics = combineEpics(
	apiEpic,
);

export default epics;
