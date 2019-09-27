// import { createSelector } from 'reselect';

export const selectMenuMap = state => state.data.menuList

export const selectRedirect = state => state.data.redirect;

export const selectIsMenuLoaded = state => state.data.menuList && !state.data.menuLoading;
export const selectIsError = state => state.data.requestError !== null;
export const selectRequestError = state => state.data.requestError;

export const selectBurgerSelected = state => state.data.burgerSelected;
export const selectOptionsSelected = state => state.data.optionsSelected;
export const selectBurgerOrder = state => state.data.order;

export const selectUserName = state => state.auth.isAuthenticated ? state.auth.userName : null;
// export const selectUserName = state => state.auth.isAuthenticated ? "logout" : null;
