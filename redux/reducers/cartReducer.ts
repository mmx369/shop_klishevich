import { CartActionTypes } from '../actions/cartActions'

export interface ICartState {
  msg: string
}

export const cartReducer = (state = [], action: any) => {
  switch (action.type) {
    case CartActionTypes.NEW_ITEM:
      if (!state.some((el) => el.id === action.data.id)) {
        const newState = [...state, action.data]
        localStorage.setItem('cart', JSON.stringify(newState))
        return newState
      } else {
        const element = state.find((el) => el.id === action.data.id)
        if (element.amountOfGoods < action.stockamount) {
          const newElement = {
            ...element,
            amountOfGoods: element.amountOfGoods + 1,
          }
          const newState = state.filter((el) => el.id !== action.data.id)
          newState.push(newElement)
          localStorage.setItem('cart', JSON.stringify(newState))
          return newState
        } else {
          alert('Stock amount exceed')
          return state
        }
      }

    case CartActionTypes.INIT_ITEMS:
      return action.data
    default:
      return state
  }
}
