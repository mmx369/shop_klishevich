import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'

import { appReducer } from '../../src/redux/reducers/appReducer'
import { createNewMsgReducer } from '../../src/redux/reducers/notificationReducer'
import { cartReducer } from '../../src/redux/reducers/cartReducer'
import { createShippingPrice } from '../../src/redux/reducers/shippingReducer'

// Import your own reducer

const reducer = combineReducers({
  app: appReducer,
  newMsg: createNewMsgReducer,
  cart: cartReducer,
  shippingPrice: createShippingPrice,
})

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
