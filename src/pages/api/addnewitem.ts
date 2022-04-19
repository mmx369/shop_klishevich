import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import * as yup from 'yup'
import { dbConnect } from '../../db/dbConnect'
import ShopGoods from '../../models/shopGoods'
import { ERole } from '../../types/ERole'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })

  if (!session) {
    res.send({
      error: 'Вы должны быть авторизованы',
    })
    return
  }

  if (session.role !== ERole.Admin) {
    res.send({
      error: 'Вы должны быть администратором',
    })
    return
  }

  await dbConnect()

  if (req.method === 'POST') {
    let schema = yup.object().shape({
      nameOfGoods: yup.string().required().min(5).max(100),
      amountOfGoods: yup.number().required().min(0),
      priceOfGoods: yup.number().required().min(0),
      catalogNumber: yup.string().max(6),
      imageUrl: yup.array().of(yup.string().required()),
      country: yup.string().required().min(2).max(100),
      category: yup.string().required().min(2).max(100),
    })

    try {
      const isValid = await schema.isValid(req.body)
      if (!isValid) {
        return res.status(400).send({
          message: `Введены не полные или не корректные данные`,
        })
      }

      const {
        nameOfGoods,
        amountOfGoods,
        priceOfGoods,
        catalogNumber,
        imageUrl,
        country,
        category,
      } = req.body

      const findItem = await ShopGoods.findOne({ nameOfGoods })

      if (findItem) {
        return res.status(400).send({
          message: `${nameOfGoods} уже есть в магазине. Название товара должно быть уникальным`,
        })
      }

      const newItem = new ShopGoods({
        nameOfGoods,
        amountOfGoods,
        priceOfGoods,
        catalogNumber,
        imageUrl,
        country,
        category,
        date: new Date(),
      })

      const response = await newItem.save()

      return res
        .status(201)
        .json({ message: 'Товар успешно добавлен', item: response.toJSON() })
    } catch (err) {
      return res.status(500).send(err.message)
    }
  } else {
    res.status(422).send('Request method not supported')
  }
}
