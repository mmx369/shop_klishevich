export type ActionTypes = IShippingAction

export enum ShippingActionTypes {
  NEW_SHIPPING_PRICE = 'NEW_SHIPPING_PRICE',
}

export interface IShippingAction {
  type: ShippingActionTypes.NEW_SHIPPING_PRICE
  data: number
}

export const addShippingPrice = (value: number): IShippingAction => ({
  type: ShippingActionTypes.NEW_SHIPPING_PRICE,
  data: value,
})
