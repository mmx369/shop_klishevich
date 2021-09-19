import { NextApiRequest, NextApiResponse } from 'next'
import ShopGoods from '../../models/shopGoods'
import connectDB from '../../db/connectDb'
import { getSession } from 'next-auth/client'
import { ERole } from '../../types/ERole'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
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

  if (req.method === 'POST') {
    try {
      const {
        nameOfGoods,
        amountOfGoods,
        priceOfGoods,
        catalogNumber,
        imageUrl,
        country,
        category,
      } = req.body

      const findItem = await ShopGoods.findOne({ nameOfGoods: nameOfGoods })

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

      console.log(11111, response)

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

export default connectDB(handler)
