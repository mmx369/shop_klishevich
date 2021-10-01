import { makeStyles, Typography } from '@material-ui/core'
import Link from 'next/link'

const useStyles = makeStyles({
  link: {
textDecoration:'none'
  },
})

export default function MainTextBlock() {
  const classes = useStyles()
  return (
    <Typography variant='subtitle2'>
        Приветствую Вас на сайте бонистики и нумизматики. В каталоге моей
        коллекции представлены разделы Банкноты и Монеты. Коллекция постоянно
        расширяется. Ваш заказ банкнот иили монет вы сможете получить почтовым
        отправлением (Почта России), а также другими способами. Курьерская
        доставка по Москве 400 рублей. <p>Удачной вам покупки!</p> Более подробную
        информация о порядке оплаты и доставки смотрите в разделе <Link href='/paymentandshipping'><a className={classes.link}>Оплата и
        доставка.</a></Link>
    </Typography>
  )
}
