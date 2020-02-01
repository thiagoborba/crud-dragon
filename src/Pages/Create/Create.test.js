import React from 'react'
import Enzyme, { render } from 'enzyme'
import Create from './Create'
import Adapter from 'enzyme-adapter-react-16'
import { store } from '../../Store/Store'
import { Provider } from 'react-redux'

const Component = () => {
  return (
    <Provider store={store}>
      <Create location={{
        state: {
          name: 'teste',
          type: 'teste',
          id: '1',
          createdAt: '12/12/12'
        }
      }}  history={history} />
    </Provider>
  )
}

Enzyme.configure({ adapter: new Adapter() })

describe('Component: Create', () => {
  it('should display a h6', () => {
    const wrapper = render(<Component />)
    expect(wrapper.find('h6').length).toBe(1)
  })

  it('should display two inputs', () => {
    const wrapper = render(<Component />)
    expect(wrapper.find('input').length).toBe(2)
  })

  it('should display two buttons', () => {
    const wrapper = render(<Component />)
    expect(wrapper.find('button').length).toBe(2)
  })
})