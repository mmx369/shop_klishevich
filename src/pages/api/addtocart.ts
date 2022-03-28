import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { dbConnect } from '../../db/dbConnect'
import ShopGoods from '../../models/shopGoods'
import ShopUser from '../../models/shopUser'

export default async function getItemById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect()
  const session: any = await getSession({ req })
  const { id, quantity } = req.body

  const userCart = await ShopUser.find({ email: session.user.email })
  const product = await ShopGoods.findById(id)

  if (quantity > product!.amountOfGoods) {
    return res.status(400).send({
      message: `На складе нет такого количества`,
    })
  }
  let newQuantity: number
  const updatedCartItems = [...userCart[0]!.cart]

  const cartProductIndex = userCart[0]!.cart.findIndex((cp) => {
    return cp.productId.toString() === product!._id.toString()
  })
  if (cartProductIndex >= 0) {
    newQuantity = userCart[0]!.cart[cartProductIndex].quantity + quantity
    if (newQuantity > product!.amountOfGoods) {
      return res.status(400).send({
        message: `На складе нет такого количества`,
      })
    }
    updatedCartItems[cartProductIndex].quantity = newQuantity
  } else {
    updatedCartItems.push({
      productId: product!._id,
      quantity,
    })
  }

  const filter = { email: session.user.email }
  const update = { cart: updatedCartItems }

  await ShopUser.findOneAndUpdate(filter, update)

  res.send({
    message: 'Товар добавлен в корзину',
  })
  return
}
