import { combineReducers } from 'redux'
import { appReducer, IAppState } from './appReducer'
import { cartReducer, ICartState } from './cartReducer'
import { createShippingState, IShippingState } from './shippingReducer'

export interface IRootState {
  app: IAppState
  cart: ICartState[]
  shippingState: IShippingState
}

export const rootReducer = combineReducers({
  app: appReducer,
  cart: cartReducer,
  shippingState: createShippingState,
})
