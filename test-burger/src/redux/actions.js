import { checkHttpStatus, parseJSON } from './utils';
// import jwtDecode from 'jwt-decode';
import {LOGIN_USER_REQUEST, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER} from './constants';

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

export const SET_REDIRECT = 'set_redirect';


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

export function setRedirect(redirect) {
  return {
    type: SET_REDIRECT,
    payload: redirect
  };

}

export function loginUser(email, password, redirect="/") {
    // console.log("loginUser");
    return function(dispatch) {
        dispatch(loginUserRequest());
        return fetch(`${serverUrl}/users`)
            .then(checkHttpStatus)
            .then(parseJSON)
            .then(users => {
                try {
                    // console.log(users);
                    const user = users.find(u => u.email === email);
                    // console.log(user);
                    if (user === null) {
                        throw new Error("wrong email");
                    }
                    dispatch(loginUserSuccess(user));
                    dispatch(setRedirect(redirect));
                } catch (error) {
                    dispatch(loginUserFailure({
                      response: {
                        status: 404,
                        statusText: error
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
  const status = error.response? error.response.status: "404";
  const text = error.response? error.response.statusText: error;
  return {
    type: LOGIN_USER_FAILURE,
    payload: {
      status: status,
      statusText: text
    }
  }
}

export function loginUserSuccess(user) {
  localStorage.setItem('token', user.token);
  localStorage.setItem('userName', user.userName);
  // console.log("login success", user);
  return {
    type: LOGIN_USER_SUCCESS,
    payload: {
      token: user.token,
      userName: user.userName
    }
  }
}

export function loginUserRequest() {
  return {
    type: LOGIN_USER_REQUEST
  }
}

export function logoutUser() {
    localStorage.removeItem('token');
    return {
        type: LOGOUT_USER
    }
}
