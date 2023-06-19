import React from 'react';
import Login from '../views/login/Login';
import NewsSandBox from '../views/newsandbox/NewsSandBox';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from "react-router-dom";
function IndexRouter() {
  return (
    
    <Router>
    <Switch>
         <Route path="/login" component={Login}/>
         {/* <Route path="/"> <NewsSandBox /> </Route> */}
         <Route path="/" 
                render={()=>
                    <NewsSandBox></NewsSandBox>
         }/>
     </Switch>
  </Router>

  )
}
export default IndexRouter
