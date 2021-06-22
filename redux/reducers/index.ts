import { combineReducers } from 'redux';
import { testReducer, ITestState } from './testReducer';

export interface IRootState {
    test: ITestState;
}

export const rootReducer = combineReducers({
    test: testReducer,
});