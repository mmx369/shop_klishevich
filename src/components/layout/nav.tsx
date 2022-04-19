import {
  AppBar,
  Badge,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import { makeStyles, createStyles, styled } from '@mui/styles'
import React, { useState } from 'react'
import Link from 'next/link'
import { ELoggedIn } from '../../types/ELoggedIn'
import SignInButtons from '../auth/sign_in_button'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
// import { useRouter } from 'next/router'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import LiveHelpIcon from '@mui/icons-material/LiveHelp'
import ContactsIcon from '@mui/icons-material/Contacts'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import { ERole } from '../../types/ERole'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../redux/reducers'
import { Cart } from '../shop/Cart'
import { CartItemType } from '../../types/Cart'
import { addNewItem, removeFromCart } from '../../redux/actions/cartActions'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    drawer: {
      width: 250,
      height: '100%',
    },
  })
)

type TProps = {
  currentEmail: string | undefined
  currentRole: string
  isLoggedIn: any
  isCartEmpty: any
}

export function Nav({
  currentEmail,
  currentRole,
  isLoggedIn,
}: // isCartEmpty,
TProps) {
  // const router = useRouter()
  const classes = useStyles()
  const dispatch = useDispatch()

  // const handleClick = (e: React.MouseEvent) => {
  //   e.preventDefault()
  //   router.push('/shop/cart')
  // }

  type Anchor = 'left'

  const [state, setState] = useState({
    left: false,
  })

  const cartItems: CartItemType[] =
    useSelector((state: IRootState) => state.cart) || []

  const [cartOpen, setCartOpen] = useState(false)

  const getTotalItems = (cartItems: CartItemType[]) => {
    return cartItems.reduce((acc: number, item) => acc + item.amountOfGoods, 0)
  }

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }
      setState({ ...state, [anchor]: open })
    }

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }))

  const list = (anchor: Anchor) => (
    <div
      className={classes.drawer}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link href='/'>
          <a>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='Главная' />
            </ListItem>
          </a>
        </Link>
        <Link href='/paymentandshipping'>
          <a>
            <ListItem button>
              <ListItemIcon>
                <LocalShippingIcon />
              </ListItemIcon>
              <ListItemText primary='Оплата и доставка' />
            </ListItem>
          </a>
        </Link>
        <Link href='/faq'>
          <a>
            <ListItem button>
              <ListItemIcon>
                <LiveHelpIcon />
              </ListItemIcon>
              <ListItemText primary='Вопросы и ответы' />
            </ListItem>
          </a>
        </Link>
      </List>

      <Divider />
      <List>
        <Link href='/contacts'>
          <a>
            <ListItem button>
              <ListItemIcon>
                <ContactsIcon />
              </ListItemIcon>
              <ListItemText primary='Контакты' />
            </ListItem>
          </a>
        </Link>
      </List>
      <Divider />
      {currentRole === ERole.Admin && (
        <Link href='/admin'>
          <a>
            <ListItem button>
              <ListItemIcon>
                <SupervisorAccountIcon />
              </ListItemIcon>
              <ListItemText primary='Администрирование' />
            </ListItem>
          </a>
        </Link>
      )}
      {currentRole === ERole.Client && (
        <Link href='/client'>
          <a>
            <ListItem button>
              <ListItemIcon>
                <SupervisorAccountIcon />
              </ListItemIcon>
              <ListItemText primary='Личный кабинет' />
            </ListItem>
          </a>
        </Link>
      )}
    </div>
  )

  const handleAddToCart = (id: string, value = 1) => {
    dispatch(addNewItem(id, value))
  }

  const handleRemoveFromCart = (id: string, value = 1) => {
    dispatch(removeFromCart(id, value))
  }

  return (
    <>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <AppBar position='fixed' sx={{ boxShadow: 'none' }}>
        <Container maxWidth='lg'>
          <Toolbar variant='dense' className={classes.root}>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={toggleDrawer('left', true)}
              edge='start'
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='subtitle2' className={classes.root}>
              <Link href='/'>
                <a>Нумизматика и бонистика</a>
              </Link>
            </Typography>
            <Box
              sx={{
                display: { xs: 'none', sm: 'block' },
              }}
            >
              {isLoggedIn === ELoggedIn.True && (
                <div>Вы вошли как {currentEmail}</div>
              )}
            </Box>

            {isLoggedIn !== ELoggedIn.Unknown && (
              <SignInButtons isSignedIn={isLoggedIn === ELoggedIn.True} />
            )}
            {/* {!!isCartEmpty.length && ( */}
            <div>
              <IconButton
                color='inherit'
                // onClick={handleClick}
                onClick={() => setCartOpen(true)}
              >
                <Badge badgeContent={getTotalItems(cartItems)} color='error'>
                  <ShoppingCartRoundedIcon />
                </Badge>
              </IconButton>
            </div>
            {/* // )} */}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor='left'
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        <DrawerHeader>
          <IconButton onClick={toggleDrawer('left', false)}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        {list('left')}
      </Drawer>
    </>
  )
}
