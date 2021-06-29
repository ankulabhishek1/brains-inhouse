import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login/Login';
import axios from 'axios';


axios.defaults.baseURL = 'http://192.168.18.80:8000';
axios.defaults.headers.common['Authorization'] = 'Bearer' * localStorage.getItem('token');
ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);

