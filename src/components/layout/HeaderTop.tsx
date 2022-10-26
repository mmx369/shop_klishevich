import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Badge, Button, IconButton, Typography } from '@mui/material'
import Image from 'next/image'
import classes from './HeaderTop.module.scss'
import SearchField from './SearchField'

export function HeaderTop() {
  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <Image
          src={'/images/IBNSlogo.jpeg'}
          height={50}
          width={110}
          alt='Интернет-магазин нумизматики и бонистики'
        />
      </div>

      <Typography align='left' variant='subtitle2'>
        Тел. +7-555-111-11-11
        <br /> E-mail: info@klishevich
      </Typography>
      <SearchField />
      <div>
        <IconButton color='inherit' onClick={() => {}} data-testid='favBtn'>
          <Badge badgeContent={1} color='error' data-testid='badgeNumber'>
            <FavoriteBorderOutlinedIcon />
          </Badge>
        </IconButton>
        <IconButton color='inherit' onClick={() => {}} data-testid='cartBtn'>
          <Badge badgeContent={1} color='error' data-testid='badgeNumber'>
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
      </div>
      <Button
        // sx={{ alignSelf: 'center', marginRight: '10px' }}
        variant='outlined'
        size='small'
        disableElevation
        onClick={() => {}}
      >
        Войти
      </Button>
    </div>
  )
}
