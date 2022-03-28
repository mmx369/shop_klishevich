import { combineReducers } from 'redux'
import { appReducer, IAppState } from './appReducer'
import { createNewMsgReducer, INotificationState } from './notificationReducer'
import { cartReducer } from './cartReducer'
import { IShippingState } from './shippingReducer'
import { createShippingPrice } from './shippingReducer'

export interface IRootState {
  app: IAppState
  newMsg: INotificationState
  cart: any
  shippingPrice: IShippingState
}

export const rootReducer = combineReducers({
  app: appReducer,
  newMsg: createNewMsgReducer,
  cart: cartReducer,
  shippingPrice: createShippingPrice,
})
