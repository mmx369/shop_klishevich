import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { dbConnect } from '../../db/dbConnect'
import ShopGoods from '../../models/shopGoods'
import { ERole } from '../../types/ERole'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect()

  const session = await getSession({ req })
  if (!session) {
    res.send({
      error: 'Вы не авторизованы',
    })
    return
  }

  if (session.role !== ERole.Admin) {
    res.send({
      error: 'Вы должны быть администратором',
    })
    return
  }

  if (req.method === 'PUT') {
    try {
      const { id, newPrice } = req.body

      if (newPrice <= 0) {
        return res.status(400).send({ message: 'Цена должна быть больше ноля' })
      } else {
        const updatePriceInfo = await ShopGoods.findByIdAndUpdate(
          id,
          { priceOfGoods: newPrice },
          { new: true }
        )
        return res.json(updatePriceInfo)
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  } else {
    res.status(422).send('req_method_not_supported')
  }
}
