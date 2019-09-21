import React, { Component } from 'react';
import { Route } from 'redux-router';
import { Row } from 'reactstrap';
import './Main.css';

import {requireAuth} from './Auth';
import Header from './Header';
import Footer from './Footer';
import PageMenu from './PageMenu';
import PageOrder from './PageOrder';
import PageBurger from './PageBurger';
import Login from './Login';

export default class Main extends Component {
  componentDidMount() {
    this.props.loadMenu()
  }

  render () {
    return (
      <Route path="/" component={Header}>
        <main>
          <Route path="login" component={Login}/>
          <Route path="menu" component={requireAuth(PageMenu)}/>
          <Route path="burger" component={requireAuth(PageBurger)}/>
          <Route path="order" component={requireAuth(PageOrder)}/>
        </main>
        <Footer />
      </Route>
    );
  }

}
