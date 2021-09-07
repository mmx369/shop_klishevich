import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import connectDB from '../../db/connectDb'
import { ERole } from '../../types/ERole'
import ShopGoods from '../../models/shopGoods'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
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
      const { id, newAmount } = req.body
      console.log(id, newAmount)

      if (newAmount < 0) {
        return res
          .status(400)
          .send({ message: 'Количество должно быть положительным' })
      } else {
        const updateAmountInfo = await ShopGoods.findByIdAndUpdate(
          id,
          { amountOfGoods: newAmount },
          { new: true }
        )
        return res.json(updateAmountInfo)
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  } else {
    res.status(422).send('req_method_not_supported')
  }
}

export default connectDB(handler)
