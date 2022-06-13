import sendgrid from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { dbConnect } from '../../db/dbConnect'
import NewOrder from '../../models/newOrder'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })
  if (!session) {
    res.send({
      error: 'Вы должны быть авторизованы.',
    })
    return
  }

  if (req.method === 'POST') {
    try {
      await dbConnect()
      const currentOrder = await NewOrder.findById(req.body.orderId).select(
        'order totalPrice shippingPrice _id'
      )

      if (!currentOrder) {
        return res.status(500).send('Order not found')
      }

      type Order = {
        _id: string
        nameOfGoods: string
        amountOfGoods: number
        priceOfGoods: number
      }

      const productList = currentOrder.order as unknown as Order[]
      const orderNumber = currentOrder!._id.toString().slice(-6)

      const orderList = (order: Order[]) => {
        return order.map(
          (el) =>
            '<li>' +
            el.nameOfGoods +
            ' ' +
            el.amountOfGoods.toLocaleString('ru') +
            ' шт. ' +
            el.priceOfGoods.toLocaleString('ru') +
            ' руб. за штуку ' +
            'на сумму ' +
            (el.amountOfGoods * el.priceOfGoods).toLocaleString('ru') +
            ' руб.' +
            '</li>'
        )
      }

      sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string)
      await sendgrid
        .send({
          to: [session.user!.email as string, 'maksim@klishevich.com'],
          from: 'maksim@klishevich.com',
          subject:
            'Ваш заказ на сайте Бонистики и Нумизматики успешно оформлен',
          html: `<!DOCTYPE html>
          <html lang="ru">
          <head>
          <meta charset="utf-8">
          <title>'Ваш заказ на сайте Бонистики и Нумизматики'</title>
          <meta name="description" content='статус заказа'>
          <meta name="author" content="Заказ в интернет-магазине">
            <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        </head>
        <body>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>Уважаемый(-ая),<br/> ${req.body.fullname}!</h3>
              <p>Вы получили это письмо так как оформили заказ на сайте Бонистики и Нумизматики.<br/>
                Ваш заказ успешно оформлен, в ближайшее время с Вами свяжется наш менеджер для уточнения деталей оплаты и доставки.
              </p>
              <p>Ваш список покупок:</p>
              <ul>
              ${orderList(productList)}
              </ul>
              <p><h4>Общая стоимость заказа: ${currentOrder.totalPrice.toLocaleString(
                'ru'
              )} руб.</h4></p>
              <p><h4>Стоимость доставки ${currentOrder.shippingPrice.toLocaleString(
                'ru'
              )} руб.</h4></p>
              <p><h4>Итого сумма к оплате ${(
                currentOrder.shippingPrice + currentOrder.totalPrice
              ).toLocaleString('ru')} руб.</h4></p>
              
              <p>Номер вашего заказа: <strong>${orderNumber}</strong></p>

              <p>С Уважением, <br/>Максим Клишевич <br/>
              тел. +7-968-429-62-04 </p>
              </div>
      </body>
          </html>
          `,
        })
        .then(() => {
          console.log('Email has been sent')
          return res.json('Email has been sent')
        })
    } catch (err) {
      return res.status(500).send(err.message)
    }
  } else {
    res.status(422).send('Request method not supported')
  }
}
