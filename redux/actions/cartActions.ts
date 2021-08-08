import axios from 'axios'

export enum CartActionTypes {
  INIT_ITEMS = 'INIT_ITEMS',
  NEW_ITEM = 'NEW_ITEM',
  DEFAULT = 'DEFAULT',
}

export const initItems = () => {
  return async (dispatch) => {
    const items = JSON.parse(localStorage.getItem('cart'))
    dispatch({
      type: CartActionTypes.INIT_ITEMS,
      data: items || [],
    })
  }
}

export const addNewItem = (id: string) => {
  return async (dispatch) => {
    const item = await axios.get('/api/getitembyid', {
      params: {
        id,
      },
    })
    const itemAmount = item.data.amountOfGoods
    console.log(1111, itemAmount)
    if (itemAmount === 0) {
      dispatch({
        type: CartActionTypes.DEFAULT,
      })
    } else {
      item.data.amountOfGoods = 1
      dispatch({
        type: CartActionTypes.NEW_ITEM,
        data: item.data,
        stockamount: itemAmount,
      })
    }
  }
}
