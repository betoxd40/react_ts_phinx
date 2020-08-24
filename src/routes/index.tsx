import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from '../app/containers/Home'

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={'/'} component={Home} />
        </Switch>
    </BrowserRouter>
)

export default Routes
