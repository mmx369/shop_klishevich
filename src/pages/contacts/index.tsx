import { Typography } from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles'
import Image from 'next/image'

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

export default function Contacts() {
  const classes = useStyles()
  return (
    <>
      <Layout title='Нумизматика и бонистика | Интернет-магазин | Продажа банкнот и монет | Контакты'>
        <main className={classes.root}>
          <Typography variant='h5'>Контакты</Typography>

          <Typography variant='subtitle1'>Телефон: +7-968-429-62-04</Typography>
          <Typography variant='subtitle1'>
            Электронная почта:{' '}
            <a href='mailto:info@klishevich.com'>info@klishevich.com</a>
          </Typography>

          <ul>
            <li>
              Индивидуальный предприниматель Клишевич Максим Александрович
            </li>
            <li>ИНН 246305425708</li>
            <li>ОГРНИП 317774600133510</li>
            <li>Наименование банка ПАО Сбербанк</li>
            <li>корреспондентский счет 30101810400000000225</li>
            <li>БИК 044525225</li>
            <li>расчетный счет 40802810838000054879</li>
          </ul>
          <Typography>
            Обращаем внимание, что данные реквизиты не предназначены для оплаты
            заказов
          </Typography>
          <Image
            src={'/images/IBNSlogo.jpeg'}
            height={50}
            width={110}
            alt='IBNS Logo'
          />
          <Typography variant='subtitle2'>
            Член Международного союза бонистов
          </Typography>
        </main>
      </Layout>
    </>
  )
}
