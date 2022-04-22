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
    //get current product
    const item = await axios.get(`${process.env.RESTURL}/api/getitembyid`, {
      params: {
        id,
      },
    })
    const itemAmount = item.data.amountOfGoods //get product remain in stock

    if (itemAmount <= 0) {
      //if below 0 dont change cart
      dispatch({
        type: CartActionTypes.DEFAULT,
      })
    } else {
      //changed quantity
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
