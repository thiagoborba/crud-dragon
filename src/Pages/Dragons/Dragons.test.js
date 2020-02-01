import React from 'react'
import Enzyme, { render } from 'enzyme'
import Dragons from './Dragons'
import Adapter from 'enzyme-adapter-react-16'
import { store } from '../../Store/Store'
import { Provider } from 'react-redux'

const Component = () => {
  return (
    <Provider store={store}>
      <Dragons />
    </Provider>
  )
}

Enzyme.configure({ adapter: new Adapter() })

describe('Component: Dragons', () => {
  it('should display a h1', () => {
    const wrapper = render(<Component />)
    expect(wrapper.find('h1').length).toBe(1)
  })

  it('should display a ul', () => {
    const wrapper = render(<Component />)
    expect(wrapper.find('ul').length).toBe(1)
  })
})