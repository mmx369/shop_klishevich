import { makeStyles, createStyles } from '@mui/styles'
import Layout from '../../components/layout/layout'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: '50px',
      maxWidth: '900px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  })
)

export default function PaymentAndShipping() {
  const classes = useStyles()
  return (
    <>
      <Layout title='Нумизматика и бонистика | Интернет-магазин | Продажа банкнот и монет | Оплата и доставка'>
        <div className={classes.root}>
          <h1>Варианты оплаты:</h1>
          <ul>
            {/* <li>Банковской картой на сайте магазина.</li> */}
            <li> Наличными курьеру (для города Москвы).</li>
            <li> Перевод на карту Сбербанка.</li>
            <li> Почтовый перевод (Почта России).</li>
          </ul>
          <p>
            После оформления заказа на Ваш электронный адрес придут реквизиты
            для осуществления оплаты, если Вами была выбрана доставка курьером с
            Вами свяжется наш менеджер для согласования удобного времени
            доставки.
          </p>
          <h1>Доставка:</h1>
          <ul>
            <li>
              Курьерская доставка до места, указанного Вами. Стоимость 400
              рублей. Предварительное согласование. (для города Москвы)
            </li>
            <li>
              Доставка Почтой России по России (Заказное письмо 1 класса - 200
              рублей)
            </li>
            <li>
              Заказное письмо регистрируемой почтой Почта России (с трек
              номером) за пределы России: 500 рублей
            </li>
          </ul>
        </div>
      </Layout>
    </>
  )
}
