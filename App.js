import React from 'react'
import Home from './components/admin/Home'
import Header from './components/Header'
import { BrowserRouter as BR, Route } from "react-router-dom";
import Panel from './components/admin/Panel';
import Signin from './components/registration/Signin';
import Signup from './components/registration/Signup';

export default function App() {
  return (
    <>
      <BR>
        <Header />
        <div className="container">
          {localStorage.getItem("token") === null ? (
            <>
               <Route exact path="/">
                <Home />
              </Route>
            <Route exact path="/signin">
                <Signin />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
               </>
          ) : (
            <>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/panel">
                <Panel />
              </Route>
            </>
          )}
        </div>
      </BR>
    </>
  )
}
