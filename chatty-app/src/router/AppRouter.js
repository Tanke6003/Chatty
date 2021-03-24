import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { ChatPages } from '../pages/ChatPages';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Router>
        <div>
          <Switch>
                <Route path="/auth" component = { AuthRouter }/>
                <Route exact path = "/" component = { ChatPages } />
                <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    )
}
