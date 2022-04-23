import { ActionTypes, ShippingActionTypes } from '../actions/shippingAction'

export interface IShippingState {
  shippingPrice?: number
}

export const initialState: IShippingState = {
  shippingPrice: undefined,
}

export const createShippingState = (
  state = initialState,
  action: ActionTypes
) => {
  switch (action.type) {
    case ShippingActionTypes.NEW_SHIPPING_PRICE: {
      return { ...state, shippingPrice: action.data }
    }
    default:
      return state
  }
}
