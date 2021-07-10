import { combineReducers } from 'redux'
import { testReducer, ITestState } from './testReducer'
import { appReducer, IAppState } from './appReducer'
import { createNewMsgReducer, INotificationState } from './notificationReducer'

export interface IRootState {
  test: ITestState
  app: IAppState
  newMsg: INotificationState
}

export const rootReducer = combineReducers({
  test: testReducer,
  app: appReducer,
  newMsg: createNewMsgReducer,
})
