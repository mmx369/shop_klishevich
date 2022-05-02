import { render } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import { makeStore } from '../dataLayer'

const TestProvider = ({ store, children }) => (
  <Provider store={store}>{children}</Provider>
)

export function testRender(ui, { store, ...otherOpts }) {
  return render(<TestProvider store={store}>{ui}</TestProvider>, otherOpts)
}

export function makeTestStore(opts = {}) {
  const store = makeStore(opts)
  const origDispatch = store.dispatch
  store.dispatch = jest.fn(origDispatch)
  return store
}

export const fixtureSet = {
  name: 'Bogus lego set',
  num_parts: 666,
  last_modified_dt: 'long ago',
  set_img_url: 'http://arent.i.pretty',
  set_num: '666_2',
  set_url: 'http://somewhere',
  theme_id: 666,
  year: 666,
}
