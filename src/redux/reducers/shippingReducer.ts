import { ShippingActionTypes } from '../actions/shippingAction'

export interface IShippingState {
  shippingPrice: number | null
}

export const initialState: IShippingState = {
  shippingPrice: null,
}

export const createShippingPrice = (state = initialState, action: any) => {
  switch (action.type) {
    case ShippingActionTypes.NEW_SHIPPING_PRICE: {
      return action.data
    }
    default:
      return state
  }
}