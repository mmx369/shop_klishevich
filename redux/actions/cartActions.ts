import axios from 'axios'

export enum CartActionTypes {
  INIT_ITEMS = 'INIT_ITEMS',
  NEW_ITEM = 'NEW_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
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

export const addNewItem = (id: string, value: number) => {
  return async (dispatch) => {
    const item = await axios.get(`${process.env.RESTURL}/api/getitembyid`, {
      params: {
        id,
      },
    })
    const itemAmount = item.data.amountOfGoods

    if (itemAmount <= 0) {
      dispatch({
        type: CartActionTypes.DEFAULT,
      })
    } else {
      item.data.amountOfGoods = value
      dispatch({
        type: CartActionTypes.NEW_ITEM,
        data: item.data,
        stockamount: itemAmount,
      })
    }
  }
}

export const deleteItem = (id: string) => {
  console.log('Action: ', id)

  return async (dispatch) => {
    dispatch({
      type: CartActionTypes.DELETE_ITEM,
      data: id,
    })
  }
}
