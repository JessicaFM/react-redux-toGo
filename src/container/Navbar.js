import React, { Component } from 'react'

//components
 import Main from './Main'

//routes
import {
    Router,
    Route,
    BrowserRouter,
    Switch,
    NavLink
  } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <nav className="navbar navbar-dark bg-dark">
                        <div className="container">
                            <NavLink className="navbar-brand" 
                                to="/">
                                LastBan
                            </NavLink>{' '}
                        </div>
                    </nav>
            
                    <Switch>
                        <Route exact path="/" component={Main} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default Navbar;