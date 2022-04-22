import Typography from '@mui/material/Typography'
import { createStyles, makeStyles } from '@mui/styles'
import Link from 'next/link'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: 50,
    },
  })
)

export default function MainTextBlock() {
  const classes = useStyles()
  return (
    <section className={classes.root}>
      <Typography variant='subtitle2' align='justify'>
        Приветствую Вас на сайте интернет-магазина бонистики и нумизматики. В
        каталоге нашей коллекции представлены разделы Банкноты и Монеты.
        Коллекция постоянно расширяется. Ваш заказ банкнот или монет вы сможете
        получить почтовым отправлением (Почта России), а также другими
        способами. <p>Удачной вам покупки!</p> Более подробную информацию о
        порядке оплаты и доставки смотрите в разделе &nbsp;
        <strong>
          <Link href='/paymentandshipping'>
            <a>Оплата и доставка.</a>
          </Link>
        </strong>
      </Typography>
    </section>
  )
}
