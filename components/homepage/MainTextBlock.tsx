import { makeStyles, Typography } from '@material-ui/core'
import Link from 'next/link'

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
  text: {
    margin: 10,
    padding: 2,
  },
})

export default function MainTextBlock() {
  const classes = useStyles()
  return (
    <Typography variant='subtitle2' className={classes.text}>
      Приветствую Вас на сайте бонистики и нумизматики. В каталоге моей
      коллекции представлены разделы Банкноты и Монеты. Коллекция постоянно
      расширяется. Ваш заказ банкнот или монет вы сможете получить почтовым
      отправлением (Почта России), а также другими способами. Курьерская
      доставка по Москве 400 рублей. <p>Удачной вам покупки!</p> Более подробную
      информацию о порядке оплаты и доставки смотрите в разделе &nbsp;
      <Link href='/paymentandshipping'>
        <a className={classes.link}>Оплата и доставка.</a>
      </Link>
    </Typography>
  )
}
