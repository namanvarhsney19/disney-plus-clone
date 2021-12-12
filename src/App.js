import React, { useState, useEffect } from 'react';
import './App.css';
// import styled from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'

function App() {

    const [user, setUser] = useState(null);
    useEffect(() => {
        return onAuthStateChanged(auth, user => {
            if (user) {
                setUser({
                    // name: user.displayName,
                    photoUrl: user.photoURL
                })
            }
        })
    }, [])
    return (
        <Router>
            <Header user={user} setUser={setUser} />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/detail">
                    <Detail />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
