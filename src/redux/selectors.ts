import { IRootState } from './reducers'

const currentEmail = (state: IRootState) => state.app.currentEmail
const currentRole = (state: IRootState) => state.app.currentRole
const isLoggedIn = (state: IRootState) => state.app.isLoggedIn

const currentCart = (state: IRootState) => state.cart

const shippingPrice = (state: IRootState) => state.shippingState.shippingPrice

export const appSelectors = {
  currentEmail,
  currentRole,
  isLoggedIn,
}

export const cartSelectors = {
  currentCart,
}

export const shippingSelectors = {
  shippingPrice,
}
