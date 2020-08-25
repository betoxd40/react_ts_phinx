import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from '@containers/Home'
import Login from '@containers/Login'

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={'/'} component={Login} />
      <Route path={'/home'} component={Home} />
    </Switch>
  </BrowserRouter>
)

export default Routes
