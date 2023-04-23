import React, { createContext, useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { message } from 'antd';
import { TableFull } from './component/TableFull';
import { Provider } from 'react-redux';
import { store } from './redux/store';




function App() {


  return (

    <Provider store={store}>
      <div className="App">
        <TableFull />
      </div>
    </Provider>

  );
}

export default App;
