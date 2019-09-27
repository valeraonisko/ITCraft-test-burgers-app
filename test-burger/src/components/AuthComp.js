import React from 'react';
import {connect} from 'react-redux';

import { setRedirect} from '../redux/actions';

export function requireAuth(Component) {
  class AuthenticatedComponent extends React.Component {
    UNSAFE_componentWillMount() {
        this.checkAuth();
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.checkAuth();
    }

    checkAuth() {
        if (!this.props.isAuthenticated) {
            let redirectAfterLogin = this.props.location.pathname;
            this.props.dispatch(setRedirect(`/login?next=${redirectAfterLogin}`));
        }
    }

    render() {
        return (
            <div>
                {this.props.isAuthenticated === true
                    ? <Component {...this.props}/>
                    : null
                }
            </div>
        )

    }
  }

  const mapStateToProps = (state) => ({
      token: state.auth.token,
      userName: state.auth.userName,
      isAuthenticated: state.auth.isAuthenticated
  });

  return connect(mapStateToProps)(AuthenticatedComponent);

}
