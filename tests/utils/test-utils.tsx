import { configureStore } from '@reduxjs/toolkit'
import { render as rtlRender } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'
import { appReducer } from '../../src/redux/reducers/appReducer'
import { cartReducer } from '../../src/redux/reducers/cartReducer'
import { createShippingState } from '../../src/redux/reducers/shippingReducer'

const reducer = combineReducers({
  app: appReducer,
  cart: cartReducer,
  shippingState: createShippingState,
})

function render(
  ui: any,
  {
    preloadedState,
    store = configureStore({ reducer, preloadedState }),
    ...renderOptions
  }: any = {}
) {
  function Wrapper({ children }: any) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
