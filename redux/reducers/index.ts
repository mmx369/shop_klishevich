import { combineReducers } from 'redux'
import { testReducer, ITestState } from './testReducer'
import { appReducer, IAppState } from './appReducer'

export interface IRootState {
  test: ITestState
  app: IAppState
}

export const rootReducer = combineReducers({
  test: testReducer,
  app: appReducer,
})
