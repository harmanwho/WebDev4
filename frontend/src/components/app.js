// React imports
import React, { useState, useEffect } from "react";

//Components
import NavBar from './navbar';
import Listings from './listings';


//Utils
// import COLORS from "../utils/colors";
import "../css/app.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import SignUp from "./signup";
import LogIn from "./login";


export default function App() {
    const [user, setUser] = useState(null);
    
    const getUser = function() {
        fetch("/getUser")
            .then(res => res.json())
            .then(_user => {
                if(_user.username) setUser(_user.username);
            });
    }

    useEffect (getUser, []);

    return (
        <div className="mainDiv">
            <NavBar user={user}></NavBar>
            <Router>
                <Switch>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/login">
                    <LogIn />
                </Route>
                <Route path="/home">
                    <Listings />
                </Route>
                {/* <Route path="/newApplication">
                    
                </Route>
                <Route path="/">
                
                </Route> */}
                <Route
                    exact
                    path="/"
                    render={() => {
                        return (
                        // this.state.isUserAuthenticated ?
                        <Redirect to="/home" /> 
                        // :<Redirect to="/test1" /> 
                        )
                    }}
                />
                </Switch>
            </Router>
        </div>
    );
}


