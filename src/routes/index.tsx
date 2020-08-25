import React from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import Home from '@containers/Home'
import Login from '@containers/Login'
import history from '@utils/history'

const Routes: React.FC = () => (
  <Router history={history}>
    <Switch>
      <Route path={'/login'} component={Login} />
      <Route path={'/'} component={Home} />
    </Switch>
  </Router>
)

export default Routes
