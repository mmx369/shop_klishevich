import Button from '@mui/material/Button'
import { createStyles, makeStyles } from '@mui/styles'
import { ROUBLE } from '../../constants'
import { translateCategory, translateCountry } from '../../lib/translate'
import { CartItemType } from '../../types/Cart'

type TProps = {
  item: CartItemType
  addToCart: (id: string) => void
  removeFromCart: (id: string) => void
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'Arial, Helvetica, sans-serif',
      borderBottom: '1px solid lightblue',
      paddingBottom: '10px',
    },
    info: {
      fontSize: 'small',
    },
    buttons: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    img: {
      maxWidth: '80px',
      objectFit: 'contain',
      marginLeft: '10px',
    },
  })
)

export const CartItem: React.FC<TProps> = ({
  item,
  addToCart,
  removeFromCart,
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div>
        <h5 style={{ marginBottom: '5px' }}>
          {translateCategory(item.category)} | {translateCountry(item.country)}{' '}
          | {item.nameOfGoods}
        </h5>
        <div className={classes.info}>
          <div>
            Цена: {item.priceOfGoods} {ROUBLE}
          </div>
          <div>
            Итого: {(item.amountOfGoods * item.priceOfGoods).toFixed(0)}{' '}
            {ROUBLE}
          </div>
        </div>
        <div className={classes.buttons}>
          <Button
            size='small'
            variant='outlined'
            onClick={() => removeFromCart(item._id)}
          >
            -
          </Button>
          <p>{item.amountOfGoods}</p>
          <Button
            size='small'
            variant='outlined'
            onClick={() => addToCart(item._id)}
          >
            +
          </Button>
        </div>
      </div>
      <img
        src={item.imageUrl[0]}
        alt={item.nameOfGoods}
        className={classes.img}
      />
    </div>
  )
}
