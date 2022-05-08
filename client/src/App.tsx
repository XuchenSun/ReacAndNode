import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import {ICustomerObject} from "./interface/ICustomerObject";
import Customer from "./components/Customer";

function App() {

  return (
    <div className="App">
      <Customer/>
    </div>
  );
}

export default App;
