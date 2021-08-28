import { combineReducers } from 'redux'
import { testReducer, ITestState } from './testReducer'
import { appReducer, IAppState } from './appReducer'
import { createNewMsgReducer, INotificationState } from './notificationReducer'
import { cartReducer } from './cartReducer'
import { IShippingState } from './shippingReducer'
import { createShippingPrice } from './shippingReducer'

export interface IRootState {
  test: ITestState
  app: IAppState
  newMsg: INotificationState
  cart: any
  shippingPrice: IShippingState
}

export const rootReducer = combineReducers({
  test: testReducer,
  app: appReducer,
  newMsg: createNewMsgReducer,
  cart: cartReducer,
  shippingPrice: createShippingPrice,
})
