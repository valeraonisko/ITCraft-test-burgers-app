import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import configureStore from './store/configureStore';
import MainHandler from "./components/MainHandler";

import {loginUserSuccess} from './redux/actions';


const store = configureStore(window.__INITIAL_STATE__);

let token = localStorage.getItem('token');
if (token !== null) {
    let userName = localStorage.getItem('userName');
    store.dispatch(loginUserSuccess({userName: userName, token: token}));
}

function App() {
  return (
    <Provider store={store}>
      <MainHandler />
    </Provider>
  );
}

export default App;
