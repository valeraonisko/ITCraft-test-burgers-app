import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import { loginUser } from '../redux/actions';


export class Login extends Component {
  constructor(props) {
    super(props);
    const values = queryString.parse(this.props.location.search);
    // console.log(values);
    const redirectRoute = values.next || '/login';
    this.state = {
      email: 'test@com',
      password: '12345',
      redirectTo: redirectRoute
    };

    this.loginClick.bind(this);
  }

  loginClick(e) {
    e.preventDefault();
    this.props.loginUser(this.state.email, this.state.password, this.state.redirectTo);
  }

  render() {
    const { email, password } = this.props;
    return (
      <div className='col-xs-12 col-md-6 col-md-offset-3'>
        <h3>Log in to view burger menu!</h3>
        {this.props.statusText ? <div className='alert alert-info'>{this.props.statusText}</div> : ''}
        <form>
        <div className='form-group'>
            <input type='text'
              className='form-control input-lg'
              defaultValue={email}
              placeholder='Email' />
            </div>
          <div className='form-group'>
            <input type='password'
              className='form-control input-lg'
              defaultValue={password}
              placeholder='Password no less 8 symbols' />
          </div>
          <button type='submit'
            className='btn btn-lg'
            disabled={this.props.isAuthenticating}
            onClick={(e) => this.loginClick(e)} >Submit</button>
      </form>
    </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email   : state.auth.email,
  password  : state.auth.password,
  isAuthenticating   : state.auth.isAuthenticating,
  statusText         : state.auth.statusText
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (email, password, redirect) => dispatch(loginUser(email, password, redirect))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
