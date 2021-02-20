import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Main from '../pages/main'

const Routers = () => {

    return(
        <Router>
            <Switch>
                <Route path="/main" component={Main}/>
                <Route path="/">
                    <Redirect to='/main'/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routers;