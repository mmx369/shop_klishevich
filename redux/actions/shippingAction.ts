export enum ShippingActionTypes {
  NEW_SHIPPING_PRICE = 'NEW_SHIPPING_PRICE',
}

export const addShippingPrice = (value: number) => ({
  type: ShippingActionTypes.NEW_SHIPPING_PRICE,
  data: value,
})
