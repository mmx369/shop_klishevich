import Link from 'next/link'
import { Container, AppBar, Toolbar, Button, Box } from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginBottom: '50px',
      textAlign: 'center',
      padding: '1rem',
    },
  })
)

export default function BottomAppBar() {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.root}>
        <Link href='/'>
          <a>
            <strong>Интернет-магазин. Нумизматика и бонистика</strong>
          </a>
        </Link>
      </Box>
      <AppBar position='fixed' color='primary' sx={{ top: 'auto', bottom: 0 }}>
        <Container maxWidth='lg'>
          <Toolbar variant='dense'>
            <Box
              sx={{
                display: { xs: 'none', sm: 'block' },
              }}
            >
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
            </Box>
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
