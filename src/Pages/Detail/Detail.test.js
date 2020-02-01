import React from 'react'
import Enzyme, { render } from 'enzyme'
import Detail from './Detail'
import Adapter from 'enzyme-adapter-react-16'
import { store } from '../../Store/Store'
import { Provider } from 'react-redux'

const Component = ({ history }) => {
  return (
    <Provider store={store}>
      <Detail location={{
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

describe('Component: Detail', () => {
  it('should display a h6', () => {
    const wrapper = render(<Component />)
    expect(wrapper.find('h6').length).toBe(1)
  })

  it('should display four inputs', () => {
    const wrapper = render(<Component />)
    expect(wrapper.find('input').length).toBe(4)
  })

  it('should display a button', () => {
    const wrapper = render(<Component />)
    expect(wrapper.find('button').length).toBe(1)
  })
})