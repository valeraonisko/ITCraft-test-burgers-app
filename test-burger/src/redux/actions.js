import { checkHttpStatus, parseJSON } from './utils';
import { pushState } from 'redux-router';
import jwtDecode from 'jwt-decode';
import {LOGIN_USER_REQUEST,
  // LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS, LOGOUT_USER, FETCH_PROTECTED_DATA_REQUEST,
  RECEIVE_PROTECTED_DATA} from './constants';

export const MENU_LOAD = 'menu_load';
export const MENU_ERROR = 'menu_error';

export const MENU_RECEIVED = 'menu_received';

export const DROP_REDIRECT = 'drop_redirect';

export const CLICK_BURGER = 'click_burger';
export const CLICK_APPLY_BURGER = 'click_apply_burger';
export const CLICK_CANCEL_BURGER = 'click_cancel_burger';

export const CLICK_ADD_OPTION = 'click_add_option';
export const CLICK_DEC_OPTION = 'click_dec_option';

export const CLICK_NEW_BURGER = 'click_new_burger';
export const CLICK_FINISH_ORDER = 'click_finish_order';


const serverUrl = 'http://localhost:3001';

export const setLoadMenu = () => {
  return {
    type: MENU_LOAD
  }
}

export const errorMenu = (err) => {
  return {
    type: MENU_ERROR,
    payload: err
  }
}

export const loadMenu = () => (dispatch) => {
  dispatch(setLoadMenu());
  fetch(`${serverUrl}/menu`)
    .then(response => {
      if(response.ok) {
        response.json().then(menuList => {
          dispatch(receiveMenu(menuList))
        })
      } else {
        console.log('error load menu');
        dispatch(errorMenu('error load menu'))
      }
    })
    .catch(err => {
    console.log('error load menu');
    dispatch(errorMenu(err.message))
    })
};


export const receiveMenu = (menuList) => {
  return {
    type: MENU_RECEIVED,
    payload: menuList
  }
}

export function dropRedirect() {
  return {
    type: DROP_REDIRECT
  };
}

export function clickBurger(id) {
  return {
    type: CLICK_BURGER,
    payload: id
  };
}

export function clickAddOption(code) {
  return {
    type: CLICK_ADD_OPTION,
    payload: code
  };
}

export function clickDecOption(code) {
  return {
    type: CLICK_DEC_OPTION,
    payload: code
  };
}

export function clickApplyBurger() {
  return {
    type: CLICK_APPLY_BURGER
  };
}

export function clickCancelBurger() {
  return {
    type: CLICK_CANCEL_BURGER
  };
}

export function clickNewBurger() {
  return {
    type: CLICK_NEW_BURGER
  };
}

export function clickFinishOrder() {
  return {
    type: CLICK_FINISH_ORDER
  };
}

export function loginUser(email, password, redirect="/") {
    return function(dispatch) {
        dispatch(loginUserRequest());
        return fetch('http://localhost:3000/auth/getToken/', {
            method: 'post',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({email: email, password: password})
            })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then(response => {
                try {
                    let decoded = jwtDecode(response.token);
                    dispatch(loginUserSuccess(response.token));
                    dispatch(pushState(null, redirect));
                } catch (e) {
                    dispatch(loginUserFailure({
                        response: {
                            status: 403,
                            statusText: 'Invalid token'
                        }
                    }));
                }
            })
            .catch(error => {
                dispatch(loginUserFailure(error));
            })
    }
}

export function loginUserFailure(error) {
  localStorage.removeItem('token');
  return {
    type: LOGIN_USER_FAILURE,
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  }
}

export function loginUserSuccess(token) {
  localStorage.setItem('token', token);
  return {
    type: LOGIN_USER_SUCCESS,
    payload: {
      token: token
    }
  }
}

export function loginUserRequest() {
  return {
    type: LOGIN_USER_REQUEST
  }
}
