import {createReducer} from '../utils';

import {MENU_LOAD, MENU_ERROR, MENU_RECEIVED, DROP_REDIRECT,
   CLICK_BURGER, CLICK_APPLY_BURGER, CLICK_CANCEL_BURGER,
  CLICK_NEW_BURGER, CLICK_FINISH_ORDER, SET_REDIRECT } from '../actions';

const initialState = {
  menuList: null,
  menuLoading: false,
  requestError: null,

  redirect: null,
  burgerSelected: null,
  order: []
};

export default createReducer(initialState, {
    [MENU_LOAD]: (state, payload) => {
      return Object.assign({}, state, {
        ...state,
        menuList: null,
        menuLoading: true,
        requestError: null
      });
    },
    [MENU_ERROR]: (state, payload) => {
      console.log("error-menu", payload);
      return Object.assign({}, state, {
        ...state,
        menuList: null,
        menuLoading: false,
        requestError: `post request error: ${payload}`
      });
    },
    [MENU_RECEIVED]: (state, payload) => {
      return Object.assign({}, state, {
        ...state,
        menuLoading: false,
        menuList: payload
      });
    },
    [DROP_REDIRECT]:  (state, payload) => {
        return Object.assign({}, state, {
          ...state,
          redirect: null
        });
    },
    [CLICK_BURGER]:  (state, payload) => {
      const  burgerSelected =  state.menuList.find(burger => burger.id === payload);
      // console.log(burgerSelected);
      return Object.assign({}, state, {
        ...state,
        burgerSelected: burgerSelected,
        redirect: "/burger"
      });
    },
    [CLICK_APPLY_BURGER]: (state, payload) => {
      const item = {no: 1+state.order.length, burger: state.burgerSelected, options: state.optionsSelected};
      const newOrder = state.order;
      newOrder.push(item);

      return Object.assign({}, state, {
        ...state,
        redirect: '/order',
        order: newOrder,
        burgerSelected: null
      });
    },
    [CLICK_CANCEL_BURGER]: (state, payload) => {
      return Object.assign({}, state, {
        ...state,
        redirect: '/',
        burgerSelected: null
      });
    },
    [CLICK_NEW_BURGER]: (state, payload) => {
      return Object.assign({}, state, {
        ...state,
        redirect: '/',
        burgerSelected: null
      });
    },
    [CLICK_FINISH_ORDER]: (state, payload) => {
      return Object.assign({}, state, {
        ...state,
        redirect: '/',
        burgerSelected: null,
        order: []
      });
    },
    [SET_REDIRECT]: (state, payload) => {
      return Object.assign({}, state, {
        ...state,
        redirect: payload
      });
    }
});
