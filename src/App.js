import React from 'react';
import Signup from './component/signupScreen';
import Home from './component/Home';
import Login from './component/Login';
import NavBar from './component/navbar'
import './App.css';
import {Route,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <NavBar/>
       <Route path='/home' exact component={Home}/>
       <Route path='/login' exact  component={Login}/>
       <Route path='/register' exact component={Signup}/>
    </div>
  );
}

export default App;
