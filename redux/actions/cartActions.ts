import { getItemById } from '../../database/getItemById'

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
    console.log('!!!!', id)
    const item = await getItemById(id)
    console.log(item)
    const itemAmount = item.amountOfGoods
    if (itemAmount === 0) {
      dispatch({
        type: CartActionTypes.DEFAULT,
      })
    } else {
      item.amountOfGoods = 1
      dispatch({
        type: CartActionTypes.NEW_ITEM,
        data: item,
        stockamount: itemAmount,
      })
    }
  }
}
