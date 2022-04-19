import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import * as yup from 'yup'
import { dbConnect } from '../../db/dbConnect'
import NewOrder from '../../models/newOrder'
import ShopGoods from '../../models/shopGoods'
import { IProduct } from '../../types/Product'

async function checkAmountOfProducts(products: [string, number][]) {
  const productsOutOfStock = []
  for (let product of products) {
    const [id, amount] = product
    const currentProductData: { _id: object; amountOfGoods: number } | null =
      await ShopGoods.findById(id).select('amountOfGoods')
    if (currentProductData!.amountOfGoods - amount < 0) {
      productsOutOfStock.push(currentProductData)
    }
  }
  return productsOutOfStock
}

async function decreaseProducts(products: [string, number][]) {
  let result = true
  for (let product of products) {
    const [id, amount] = product
    const currentProductData: { _id: object; amountOfGoods: number } | null =
      await ShopGoods.findById(id).select('amountOfGoods')
    if (currentProductData!.amountOfGoods - amount >= 0) {
      await ShopGoods.findByIdAndUpdate(id, {
        amountOfGoods: currentProductData!.amountOfGoods - amount,
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
  const session = await getSession({ req })

  if (!session) {
    res.send({
      error: 'Вы должны быть авторизованы',
    })
    return
  }

  if (req.method === 'POST') {
    const phoneRegExp =
      /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

    let schema = yup.object().shape({
      firstName: yup.string().required().min(3).max(100),
      secondName: yup.string().required().max(100),
      fatherName: yup.string().max(100),
      zip: yup.string().required().max(10),
      country: yup.string().required().max(100),
      region: yup.string().max(100),
      city: yup.string().required().max(100),
      address: yup.string().required().max(100),
      phone: yup.string().matches(phoneRegExp).required().min(10).max(15),
      comments: yup.string().max(100),
    })

    try {
      const isValid = await schema.isValid(req.body)
      if (!isValid) {
        return res.status(400).send({
          message: `Введены не полные или не корректные данные`,
        })
      }

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
      } = req.body as {
        firstName: string
        secondName: string
        fatherName: string
        zip: string
        country: string
        region: string
        city: string
        address: string
        phone: string
        comments: string
        order: IProduct[]
        totalPrice: number
        shippingPrice: number
      }

      const goodsFromOrders: [string, number][] = order.map((el) => [
        el._id,
        el.amountOfGoods,
      ])

      const checkAmount = await checkAmountOfProducts(goodsFromOrders)

      if (checkAmount.length != 0) {
        return res.status(201).json({
          message: 'Отдельные позиции отсутствуют на складе',
          outOfStock: checkAmount,
        })
      }

      const newOrder = new NewOrder({
        email: session.user!.email,
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
