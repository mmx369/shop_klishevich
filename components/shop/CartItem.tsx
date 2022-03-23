import Button from '@material-ui/core/Button'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { translateCountry } from '../../lib/translate'
import { CartItemType } from '../../types/Cart'

type Props = {
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
      display: 'flex',
      justifyContent: 'space-between',
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

export const CartItem: React.FC<Props> = ({
  item,
  addToCart,
  removeFromCart,
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div>
        <h3>
          {item.nameOfGoods} | {translateCountry(item.country)}
        </h3>
        <div className={classes.info}>
          <p>Цена: {item.priceOfGoods} руб.</p>
          <p>
            Итого: {(item.amountOfGoods * item.priceOfGoods).toFixed(2)} руб.
          </p>
        </div>
        <div className={classes.buttons}>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => removeFromCart(item._id)}
          >
            -
          </Button>
          <p>{item.amountOfGoods}</p>
          <Button
            size='small'
            disableElevation
            variant='contained'
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
