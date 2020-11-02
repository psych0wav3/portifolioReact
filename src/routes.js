import React from 'react-router-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './pages/landing/Landing'
import Main from './pages/main/main'

//BrowserRouter
//Switch 

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ Landing }  />
                <Route path="/main" component={ Main }  />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes