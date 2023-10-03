import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Home from "../pages/home"
import DataSource from "../pages/dataSource"
import Domain from "../pages/domain"
import Pipeline from "../pages/pipeline"
import Analyze from "../pages/analyze"
import Service from "../pages/service"
import AppHeader from '../component/Header'

function MainRoutes() {
  let style ={
    margin:"10px 150px"
  }
    return <>
        {/* <Routes> */}
       <Switch>
       <Route  exact path="/" >
       <div style={style}> <Home /></div>
        </Route>
        <Route path="/datasource"><div style={style}><DataSource /></div></Route>
        <Route path="/domain"><div style={style}><Domain /></div></Route>
        <Route path="/pipeline"><div style={style}><Pipeline /></div></Route>
        <Route path="/analyze"><div style={style}><Analyze /></div></Route>
        <Route path="/service"><div style={style}><Service /></div></Route>
       </Switch>
       
        {/* </Routes> */}
    </>
}
export default MainRoutes