import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logoutUser } from '../redux/actions';


export class Logout extends Component {
  constructor(props) {
    super(props);

    this.logoutClick.bind(this);
  }

  logoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { email } = this.props;
    return (
      <div className='col-xs-12 col-md-6 col-md-offset-3'>
        <h3>Logout</h3>
        {this.props.statusText ? <div className='alert alert-info'>{this.props.statusText}</div> : ''}
        <form>
        <div className='form-group'>
            <input type='text'
              className='form-control input-lg'
              defaultValue={email}
              placeholder='Email' />
            </div>
          <button type='submit'
            className='btn btn-lg'
            disabled={this.props.isAuthenticating}
            onClick={(e) => this.logoutClick(e)} >Submit</button>
      </form>
    </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email   : state.auth.email,
  isAuthenticating   : state.auth.isAuthenticating,
  statusText         : state.auth.statusText
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
