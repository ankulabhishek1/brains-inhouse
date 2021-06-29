import React, { Component } from 'react';
import {  Switch, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import './App.css'
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Logout from './components/Logout/Logout';
import Test from './test/Test';
import axios from 'axios';
import Header from './components/Header/Header';


export default class App extends Component {

  state ={};
  componentDidMount = ()=> {
    
    axios.get('user').then(
        res =>{
         this.setState({
             user: res.data
         });
        },
        err => {
            console.log(err)
        }
    )
};
  render(){
    return (
      <div className="App">
        <Header/>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} /> 
        <Route  path="/home" component={() => <Home user={this.state.user}/>} />
        <Route  path="/logout" component={Logout} />
        <Route  path="/test" component={Test} />
      </Switch>
      </BrowserRouter>
      </div>
    );
  }
}


