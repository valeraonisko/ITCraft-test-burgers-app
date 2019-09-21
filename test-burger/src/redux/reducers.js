import {MENU_LOAD, MENU_ERROR, MENU_RECEIVED, DROP_REDIRECT,
   CLICK_BURGER, CLICK_APPLY_BURGER, CLICK_CANCEL_BURGER,
  CLICK_NEW_BURGER, CLICK_FINISH_ORDER, CLICK_ADD_OPTION, CLICK_DEC_OPTION } from './actions';

const initialState = {
  menuList: null,
  menuLoading: false,
  requestError: null,

  redirect: null,
  burgerSelected: null,
  optionsSelected: null,
  order: []
};

function getBurgerOptions(options) {
    return options.map(opt => {
      return {qt: opt.defqt, ...opt}
    });
}

function updateOptionsSelected(options, code, qt) {
   return options.map(opt => {
     if (opt.code === code) {
       const new_qt = opt.qt + qt;
       if ((new_qt >= 0) && (new_qt <= opt.maxqt)) {
         return {...opt, qt: new_qt};
       }
       return opt;
     }
     return opt;
   })
}

export function getNextState(state = initialState, action) {
  switch (action.type) {
    case MENU_LOAD:
      return {
        ...state,
        menuList: null,
        menuLoading: true,
        requestError: null
      };
    case MENU_ERROR:
      return {
        ...state,
        menuList: null,
        menuLoading: false,
        requestError: `post request error: ${action.payload}`
      };
    case MENU_RECEIVED:
      return {
        ...state,
        menuLoading: false,
        menuList: action.payload,
        redirect: '/'
      };
    case DROP_REDIRECT:
        return {
          ...state,
          redirect: null
        };
    case CLICK_BURGER:
      const  burgerSelected =  state.menuList.find(burger => burger.id === action.payload);
      // console.log(burgerSelected);
      return {
        ...state,
        burgerSelected: burgerSelected,
        optionsSelected: getBurgerOptions(burgerSelected.opts),
        redirect: "/burger"
      };
    case CLICK_APPLY_BURGER:
      const item = {no: 1+state.order.length, burger: state.burgerSelected, options: state.optionsSelected};
      const newOrder = state.order;
      newOrder.push(item);

      return {
        ...state,
        redirect: '/order',
        order: newOrder,
        burgerSelected: null,
        optionsSelected: null
      };
    case CLICK_CANCEL_BURGER:
      return {
        ...state,
        redirect: '/',
        burgerSelected: null,
        optionsSelected: null
      };
    case CLICK_NEW_BURGER:
      return {
        ...state,
        redirect: '/',
        burgerSelected: null,
        optionsSelected: null
      };

    case CLICK_ADD_OPTION:
      return {
        ...state,
        optionsSelected: updateOptionsSelected(state.optionsSelected, action.payload, 1)
      };

    case CLICK_DEC_OPTION:
      return {
        ...state,
        optionsSelected: updateOptionsSelected(state.optionsSelected, action.payload, -1)
      };

    case CLICK_FINISH_ORDER:
      return {
        ...state,
        redirect: '/',
        burgerSelected: null,
        optionsSelected: null,
        order: []
        };
    default:
      return state;
  }
}
