import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './Main.css';

import {requireAuth} from './AuthComp';
import Header from './Header';
import Footer from './Footer';
import PageMenu from './PageMenu';
import PageOrder from './PageOrder';
import PageBurger from './PageBurger';
import Login from './Login';
import Logout from './Logout';

export default class Main extends Component {
  componentDidMount() {
    this.props.loadMenu()
  }

  render () {
    const { redirect, burgerSelected, userName, dropRedirect } = this.props;
    if (redirect) {
      console.log("redirect", redirect);
      dropRedirect();
      return (<Router><Redirect to={redirect}/></Router>);
    }

    return (
      <Router>
        <Header burgerSelected={burgerSelected} userName={userName}/>
        <main>
          <Route exact path="/" component={requireAuth(PageMenu)}/>
          <Route path="/login" component={Login}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/burger" component={requireAuth(PageBurger)}/>
          <Route path="/order" component={requireAuth(PageOrder)}/>
        </main>
        <Footer />
      </Router>
    );
  }

}
