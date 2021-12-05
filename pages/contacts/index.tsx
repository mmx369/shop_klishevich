import { Typography } from '@material-ui/core'
import Image from 'next/image'
import Layout from '../../components/layout/layout'
import logoIBNS from '../../public/IBNSlogo.jpeg'

export default function Contacts() {
  return (
    <>
      <Layout title='Нумизматика и бонистика | Интернет-магазин | Контакты'>
        <Typography variant='h5'>Контакты</Typography>

        <Typography variant='subtitle1'>Телефон: +7-968-429-62-04</Typography>
        <Typography variant='subtitle1'>
          Электронная почта:{' '}
          <a href='mailto:info@klishevich.com'>info@klishevich.com</a>
        </Typography>

        <ul>
          <li>Индивидуальный предприниматель Клишевич Максим Александрович</li>
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
        <Image width={110} height={50} src={logoIBNS} alt='IBNS Logo' />
        <Typography variant='subtitle2'>
          Член Международного союза бонистов
        </Typography>
      </Layout>
    </>
  )
}