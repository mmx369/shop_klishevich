import axios from 'axios'

export enum CartActionTypes {
  INIT_ITEMS = 'INIT_ITEMS',
  NEW_ITEM = 'NEW_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
  DEFAULT = 'DEFAULT',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

export const initItems = () => {
  return async (dispatch: any) => {
    const items = JSON.parse(localStorage.getItem('cart') as string)
    dispatch({
      type: CartActionTypes.INIT_ITEMS,
      data: items || [],
    })
  }
}

export const addNewItem = (id: string, value: number) => {
  return async (dispatch: any) => {
    //получил текущий продукт из базы
    const item = await axios.get(`${process.env.RESTURL}/api/getitembyid`, {
      params: {
        id,
      },
    })
    const itemAmount = item.data.amountOfGoods //получил текущий остаток

    if (itemAmount <= 0) {
      //если остаток меньше ноля выдал ошибку - корзину не меняю
      dispatch({
        type: CartActionTypes.DEFAULT,
      })
    } else {
      //изменил остаток на желаемый добавить в корзину
      item.data.amountOfGoods = value
      dispatch({
        type: CartActionTypes.NEW_ITEM,
        data: item.data, //new data for cart
        stockamount: itemAmount, // stock quantity
      })
    }
  }
}

export const removeFromCart = (id: string, value: number) => {
  return async (dispatch: any) => {
    dispatch({
      type: CartActionTypes.REMOVE_FROM_CART,
      data: { id, value },
    })
  }
}

export const deleteItem = (id: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: CartActionTypes.DELETE_ITEM,
      data: id,
    })
  }
}
