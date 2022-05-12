import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import {ICustomerObject} from "./interface/ICustomerObject";
import Customer from "./components/Customer";
import RegisterPage from "./page/RegisterPage";

function App() {

  return (
    <div className="App">
      <RegisterPage/>
    </div>
  );
}

export default App;
