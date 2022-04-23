import axios from 'axios'
import { ActionCreator } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { CartItemType } from '../../types/Cart'

export enum CartActionTypes {
  INIT_ITEMS = 'INIT_ITEMS',
  NEW_ITEM = 'NEW_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
  DEFAULT = 'DEFAULT',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

export type ActionsTypes =
  | IInitItemsAction
  | IAddNewItemAction
  | IDefaultAction
  | IDeleteItemAction
  | IRemoveItemFromCartAction

export interface IInitItemsAction {
  type: CartActionTypes.INIT_ITEMS
  data: CartItemType[]
}

export interface IAddNewItemAction {
  stockamount: number
  type: CartActionTypes.NEW_ITEM
  data: CartItemType
}

export interface IDeleteItemAction {
  type: CartActionTypes.DELETE_ITEM
  data: string
}

export interface IDefaultAction {
  type: CartActionTypes.DEFAULT
}

export interface IRemoveItemFromCartAction {
  type: CartActionTypes.REMOVE_FROM_CART
  data: { id: string; value: number }
}

export const initItems: ActionCreator<
  ThunkAction<Promise<void>, CartItemType, null, IInitItemsAction>
> = () => {
  return async (
    dispatch: ThunkDispatch<CartItemType, null, IInitItemsAction>
  ) => {
    const items: CartItemType[] = JSON.parse(
      localStorage.getItem('cart') as string
    )
    dispatch({
      type: CartActionTypes.INIT_ITEMS,
      data: items || [],
    })
  }
}

export const addNewItem: ActionCreator<
  ThunkAction<Promise<void>, CartItemType, null, IAddNewItemAction>
> = (id: string, value: number) => {
  return async (
    dispatch: ThunkDispatch<
      CartItemType,
      null,
      IAddNewItemAction | IDefaultAction
    >
  ) => {
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

export const removeFromCart: ActionCreator<
  ThunkAction<Promise<void>, CartItemType, null, IRemoveItemFromCartAction>
> = (id: string, value: number) => {
  return async (
    dispatch: ThunkDispatch<CartItemType, null, IRemoveItemFromCartAction>
  ) => {
    dispatch({
      type: CartActionTypes.REMOVE_FROM_CART,
      data: { id, value },
    })
  }
}

export const deleteItem: ActionCreator<
  ThunkAction<Promise<void>, CartItemType, null, IDeleteItemAction>
> = (id: string) => {
  return async (
    dispatch: ThunkDispatch<CartItemType, null, IDeleteItemAction>
  ) => {
    dispatch({
      type: CartActionTypes.DELETE_ITEM,
      data: id,
    })
  }
}
