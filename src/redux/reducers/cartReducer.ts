import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ActionsTypes, CartActionTypes } from '../actions/cartActions'

toast.configure()

export interface ICartState {
  amountOfGoods: number
  catalogNumber?: string
  category: string
  country: string
  imageUrl: string[]
  nameOfGoods: string
  priceOfGoods: number
  _id: string
}

export const initialState = <ICartState[]>[]

export const cartReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case CartActionTypes.NEW_ITEM:
      //если в корзине нет такого товара добавляю товар
      if (!state.some((el) => el._id === action.data._id)) {
        const newState = [...state, action.data]
        localStorage.setItem('cart', JSON.stringify(newState))
        toast.success(`${action.data.nameOfGoods} успешно добавлен в корзину`, {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 3000,
        })
        return newState
      } else {
        //если в корзине есть то добавляем количество
        const element = state.find((el) => el._id === action.data._id)
        if (
          element!.amountOfGoods + action.data.amountOfGoods <=
          action.stockamount
        ) {
          const newElement = {
            ...(element as ICartState),
            amountOfGoods: element!.amountOfGoods + action.data.amountOfGoods,
          }
          const newState = state.filter((el) => el._id !== action.data._id)
          newState.push(newElement)
          localStorage.setItem('cart', JSON.stringify(newState))
          toast.success(
            `${action.data.nameOfGoods} успешно добавлен в корзину`,
            {
              position: toast.POSITION.TOP_LEFT,
              autoClose: 3000,
            }
          )

          return newState
        } else {
          toast.error(`Ошибка: на складе нет такого количества товара`, {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 3000,
          })
          return state
        }
      }

    case CartActionTypes.REMOVE_FROM_CART:
      const resState = state.reduce((acc: ICartState[], item) => {
        if (item._id === action.data.id) {
          if (item.amountOfGoods === 1) return acc
          return [
            ...acc,
            { ...item, amountOfGoods: item.amountOfGoods - action.data.value },
          ]
        } else {
          return [...acc, item]
        }
      }, [])
      window.localStorage.setItem('cart', JSON.stringify(resState))
      return resState

    case CartActionTypes.INIT_ITEMS:
      return action.data

    case CartActionTypes.DELETE_ITEM:
      const newState = state.filter((el) => el._id !== action.data)
      localStorage.setItem('cart', JSON.stringify(newState))
      toast.success(`Товар успешно удален из корзины`, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 3000,
      })
      return newState

    case CartActionTypes.DEFAULT:
      toast.error(`Ошибка: на складе нет такого количества товара`, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 3000,
      })
      return state

    default:
      return state
  }
}
