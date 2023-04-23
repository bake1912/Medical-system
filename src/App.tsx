import React, { createContext, useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { message } from 'antd';
import axios from 'axios';
import { TableFull } from './component/TableFull';




function App() {
 

  return (
    
    <div className="App">
      <TableFull/>
    </div>

  );
}

export default App;
