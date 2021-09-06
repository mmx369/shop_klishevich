import { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../db/connectDb'
import { getSession } from 'next-auth/client'
import NewOrder from '../../models/newOrder'
import ShopGoods from '../../models/shopGoods'

async function decreaseAmountOfGoods(arr) {
  const goodsOutOfStock = []
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i]
    const [id, amountOfGoods] = el
    const goods = await ShopGoods.findById(id)
    console.log('goods', goods)
    if (goods.amountOfGoods - amountOfGoods < 0) {
      goodsOutOfStock.push(goods)
    } else {
      await ShopGoods.findByIdAndUpdate(id, {
        amountOfGoods: goods.amountOfGoods - amountOfGoods,
      })
    }
  }
  return goodsOutOfStock
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })

  if (!session) {
    res.send({
      error: 'You must be authorized',
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

      const goodsFromOrders = order.map((el) => [el._id, el.amountOfGoods])
      const checkAmount = await decreaseAmountOfGoods(goodsFromOrders)

      const newOrder = new NewOrder({
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

      const response = await newOrder.save()

      if (checkAmount.length != 0) {
        return res.status(201).json({
          message: 'Отдельные позиции отсутствуют на складе',
          order: response.toJSON(),
          outOfStock: checkAmount,
        })
      } else {
        return res
          .status(201)
          .json({ message: 'Заказ успешно оформлен', order: response.toJSON() })
      }
    } catch (err) {
      return res.status(500).send(err.message)
    }
  } else {
    res.status(422).send('Request method not supported')
  }
}

export default connectDB(handler)
