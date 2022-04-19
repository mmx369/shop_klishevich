export interface IProductOrders {
  address: string
  city: string
  comments?: string
  country: string
  date: string
  email: string
  fatherName?: string
  firstName: string
  order: {
    amountOfGoods: number
    nameOfGoods: string
    priceOfGoods: number
    _id: string
  }[]
  phone: string
  region?: string
  secondName: string
  status: string
  totalPrice: number
  zip: string
  _id: string
}
