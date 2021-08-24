import { CartActionTypes } from '../actions/cartActions'

export interface ICartState {
  msg: string
}

export const cartReducer = (state = [], action: any) => {
  switch (action.type) {
    case CartActionTypes.NEW_ITEM:
      if (!state.some((el) => el._id === action.data._id)) {
        const newState = [...state, action.data]
        localStorage.setItem('cart', JSON.stringify(newState))
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
          return newState
        } else {
          alert('На складе нет такого количества товара')
          return state
        }
      }

    case CartActionTypes.INIT_ITEMS:
      return action.data

    case CartActionTypes.DEFAULT:
      alert('Товара нет в наличии')
      return state

    default:
      return state
  }
}
