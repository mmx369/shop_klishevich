import { combineReducers } from 'redux'
import { testReducer, ITestState } from './testReducer'
import { appReducer, IAppState } from './appReducer'
import { createNewMsgReducer, INotificationState } from './notificationReducer'
import { cartReducer } from './cartReducer'

export interface IRootState {
  test: ITestState
  app: IAppState
  newMsg: INotificationState
  cart: any
}

export const rootReducer = combineReducers({
  test: testReducer,
  app: appReducer,
  newMsg: createNewMsgReducer,
  cart: cartReducer,
})
