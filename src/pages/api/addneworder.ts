import { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from '../../db/dbConnect'
import { getSession } from 'next-auth/client'
import NewOrder from '../../models/newOrder'
import ShopGoods from '../../models/shopGoods'

async function checkAmountOfProducts(products: any) {
  const productsOutOfStock = []
  for (let product of products) {
    const [id, amount] = product
    const currentProductData: any = await ShopGoods.findById(id)
    if (currentProductData.amountOfGoods - amount < 0) {
      productsOutOfStock.push(currentProductData)
    }
  }
  return productsOutOfStock
}

async function decreaseProducts(products: any) {
  let result = true
  for (let product of products) {
    const [id, amount] = product
    const currentProductData: any = await ShopGoods.findById(id)
    if (currentProductData.amountOfGoods - amount >= 0) {
      await ShopGoods.findByIdAndUpdate(id, {
        amountOfGoods: currentProductData.amountOfGoods - amount,
      })
    } else {
      result = false
    }
  }
  return result
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect()
  const session: any = await getSession({ req })

  if (!session) {
    res.send({
      error: 'Вы должны быть авторизованы',
    })
    return
  }

  if (req.method === 'POST') {
    try {
      const {
        firstName,
        secondName,
        fatherName,
        zip,
        country,
        region,
        city,
        address,
        phone,
        comments,
        order,
        totalPrice,
        shippingPrice,
      } = req.body

      const goodsFromOrders = order.map((el: any) => [el._id, el.amountOfGoods])

      const checkAmount = await checkAmountOfProducts(goodsFromOrders)

      if (checkAmount.length != 0) {
        return res.status(201).json({
          message: 'Отдельные позиции отсутствуют на складе',
          outOfStock: checkAmount,
        })
      }

      const newOrder = new NewOrder({
        email: session.user.email,
        firstName,
        secondName,
        fatherName,
        zip,
        country,
        region,
        city,
        address,
        phone,
        comments,
        order,
        totalPrice,
        shippingPrice,
        date: new Date(),
      })

      console.log(1111, newOrder)

      const decreaseStatus = await decreaseProducts(goodsFromOrders)

      if (decreaseStatus) {
        const response = await newOrder.save()
        return res
          .status(201)
          .json({ message: 'Заказ успешно оформлен', order: response.toJSON() })
      } else {
        return res.status(201).json({
          message: 'Что-то пошло не так попробуйте позднее',
        })
      }
    } catch (err) {
      return res.status(500).send(err.message)
    }
  } else {
    res.status(422).send('Request method not supported')
  }
}
