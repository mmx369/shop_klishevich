import Link from 'next/link'
import { Container, Hidden, AppBar, Toolbar, Button } from '@mui/material'

export default function BottomAppBar() {
  return (
    <>
      <AppBar
        position='fixed'
        color='primary'
        style={{ top: 'auto', bottom: 0 }}
      >
        <Container maxWidth='lg'>
          <Toolbar variant='dense'>
            <Hidden xsDown>
              <Link href='/'>
                <a>
                  <Button
                    color='primary'
                    variant='contained'
                    size='small'
                    disableElevation
                  >
                    Главная
                  </Button>
                </a>
              </Link>
            </Hidden>
            <Link href='/paymentandshipping'>
              <a>
                <Button
                  color='primary'
                  variant='contained'
                  size='small'
                  disableElevation
                >
                  Оплата и доставка
                </Button>
              </a>
            </Link>

            <Link href='/faq'>
              <a>
                <Button
                  color='primary'
                  variant='contained'
                  size='small'
                  disableElevation
                >
                  Вопросы и ответы
                </Button>
              </a>
            </Link>
            <Link href='/contacts'>
              <a>
                <Button
                  color='primary'
                  variant='contained'
                  size='small'
                  disableElevation
                >
                  Контакты
                </Button>
              </a>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
