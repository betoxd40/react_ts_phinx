import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from '../app/containers/Home'
import Login from '../app/containers/Login'

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/login'} component={Login} />
        </Switch>
    </BrowserRouter>
)

export default Routes
