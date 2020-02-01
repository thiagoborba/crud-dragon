import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import SingIn from '../Pages/SingIn/SingIn'
import Dragons from '../Pages/Dragons/Dragons'
import Create from '../Pages/Create/Create'
import Detail from '../Pages/Detail/Detail'
import Structure from '../Components/Structure/Structure'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(({ user }) => user)
  return (
    <Route
      {...rest}
      render={props => 
        user ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    /> 
  )
}

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={SingIn} />
      <Structure>
        <PrivateRoute path='/home' component={Dragons} />
        <PrivateRoute path='/create' component={Create} />
        <PrivateRoute path='/detail' component={Detail} />
      </Structure>
    </Switch>
  </BrowserRouter>
)

export default Routes