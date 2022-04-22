import { ShippingActionTypes } from '../actions/shippingAction'

export interface IShippingState {
  shippingPrice?: number
  kkkkkk: string
}

export const initialState: IShippingState = {
  shippingPrice: undefined,
  kkkkkk: 'ddd',
}

export const createShippingState = (state = initialState, action: any) => {
  switch (action.type) {
    case ShippingActionTypes.NEW_SHIPPING_PRICE: {
      return { ...state, shippingPrice: action.data }
    }
    default:
      return state
  }
}
