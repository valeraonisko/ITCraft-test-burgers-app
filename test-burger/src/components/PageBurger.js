import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions';
import BurgerItem from './BurgerItem';

export class PageBurger extends React.Component {

  render () {
    const { isMenuLoaded, isError, requestError,
      burgerSelected,
      clickApplyBurger, clickCancelBurger } = this.props;
    if (isMenuLoaded) {
      return burgerSelected ? (<BurgerItem burgerSelected={burgerSelected}
        burgerApplyClick={clickApplyBurger}
        burgerCancelClick={clickCancelBurger}/>) : "error: Burger was not selected";
    } else {
      return isError ? requestError : "Burger menu is loading...";
    }
  }
}

const mapStateToProps = (state) => ({
    isMenuLoaded: state.isMenuLoaded,
    isError: state.isError,
    isMenuLoaded: state.isMenuLoaded,
    requestError: state.requestError,
    burgerSelected: state.burgerSelected
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
  // clickApplyBurger: () => dispatch(clickApplyBurger()),
  // clickCancelBurger: () => dispatch(clickCancelBurger())
});

export default connect(mapStateToProps, mapDispatchToProps)(PageBurger);
