import classes from './MainTextBlock.module.css'

import { Typography } from '@material-ui/core'
import Link from 'next/link'

export default function MainTextBlock() {
  return (
    <section className={classes.textBlock}>
      <Typography variant='subtitle2'>
        Приветствую Вас на сайте бонистики и нумизматики. В каталоге моей
        коллекции представлены разделы Банкноты и Монеты. Коллекция постоянно
        расширяется. Ваш заказ банкнот или монет вы сможете получить почтовым
        отправлением (Почта России), а также другими способами. Курьерская
        доставка по Москве 400 рублей. <p>Удачной вам покупки!</p> Более
        подробную информацию о порядке оплаты и доставки смотрите в разделе
        &nbsp;
        <Link href='/paymentandshipping'>
          <a>Оплата и доставка.</a>
        </Link>
      </Typography>
    </section>
  )
}
