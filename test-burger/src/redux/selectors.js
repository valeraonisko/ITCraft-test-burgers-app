// import { createSelector } from 'reselect';

export const selectMenuMap = state => state.menuList

export const selectRedirect = state => state.redirect;

export const selectIsMenuLoaded = state => state.menuList && !state.menuLoading;
export const selectIsError = state => state.requestError !== null;
export const selectRequestError = state => state.requestError;

export const selectBurgerSelected = state => state.burgerSelected;
export const selectOptionsSelected = state => state.optionsSelected;
export const selectBurgerOrder = state => state.order;
