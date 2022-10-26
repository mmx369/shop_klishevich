import Typography from '@mui/material/Typography'
import Link from 'next/link'

export default function MainTextBlock() {
  return (
    <section>
      <Typography
        variant='subtitle2'
        align='justify'
        data-testid='mainTextBlock'
      >
        Приветствую Вас на сайте интернет-магазина бонистики и нумизматики. В
        каталоге нашей коллекции представлены разделы Банкноты и Монеты.
        Коллекция постоянно расширяется. Ваш заказ банкнот или монет вы сможете
        получить почтовым отправлением (Почта России), а также другими
        способами. <p>Удачной вам покупки!</p> Более подробную информацию о
        порядке оплаты и доставки смотрите в разделе &nbsp;
        <strong>
          <Link href='/paymentandshipping'>
            <a data-testid='navPaymentLink'>Оплата и доставка.</a>
          </Link>
        </strong>
      </Typography>
    </section>
  )
}
