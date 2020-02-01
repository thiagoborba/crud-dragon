import React from 'react'
import Enzyme, { render } from 'enzyme'
import SingIn from './SingIn'
import Adapter from 'enzyme-adapter-react-16'
import { store } from '../../Store/Store'
import { Provider } from 'react-redux'

const Component = () => {
  return (
    <Provider store={store}>
      <SingIn />
    </Provider>
  )
}

Enzyme.configure({ adapter: new Adapter() })

describe('Component: SingIn', () => {
  it('should display a form', () => {
    const wrapper = render(<Component />)
    expect(wrapper.find('form').length).toBe(1)
  })

  it('should display a button', () => {
    const wrapper = render(<Component />)
    expect(wrapper.find('button').length).toBe(1)
  })
})