import { CartActionTypes } from '../actions/cartActions'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export interface ICartState {
  msg: string
}

toast.configure()

export const cartReducer = (state = [], action: any) => {
  switch (action.type) {
    case CartActionTypes.NEW_ITEM:
      if (!state.some((el) => el._id === action.data._id)) {
        const newState = [...state, action.data]
        localStorage.setItem('cart', JSON.stringify(newState))
        toast.success(`${action.data.nameOfGoods} успешно добавлен в корзину`, {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 3000,
        })
        return newState
      } else {
        const element = state.find((el) => el._id === action.data._id)
        if (
          element.amountOfGoods + action.data.amountOfGoods <=
          action.stockamount
        ) {
          const newElement = {
            ...element,
            amountOfGoods: element.amountOfGoods + action.data.amountOfGoods,
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
