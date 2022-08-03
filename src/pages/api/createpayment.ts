import { ICreatePayment, YooCheckout } from '@a2seven/yoo-checkout'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })
  if (!session) {
    res.send({
      error: 'Вы не авторизованы',
    })
    return
  }

  if (req.method === 'POST') {
    const { orderId, paymentAmount } = req.body

    const checkout = new YooCheckout({
      shopId: process.env.UKASSA_SHOP_ID!,
      secretKey: process.env.UKASSA_SECRET_KEY!,
    })
    const idempotenceKey = orderId

    const createPayload: ICreatePayment = {
      amount: {
        value: paymentAmount.toString(),
        currency: 'RUB',
      },
      payment_method_data: {
        type: 'bank_card',
      },
      confirmation: {
        type: 'redirect',
        return_url: 'https://www.klishevich.ru',
      },
    }

    try {
      const payment = await checkout.createPayment(
        createPayload,
        idempotenceKey
      )
      res.status(200).json(payment)
    } catch (error) {
      return res.status(500).send(error.response.data)
    }
  } else {
    res.status(422).send('req_method_not_supported')
  }
}
