import React from 'react';
import {connect} from 'react-redux';

import { selectIsError, selectIsMenuLoaded } from '../redux/selectors';
import BurgerItem from './BurgerItem';
import { clickApplyBurger, clickCancelBurger} from '../redux/actions';

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
  isError: selectIsError(state),
  isMenuLoaded: selectIsMenuLoaded(state),
  requestError: state.data.requestError,
  burgerSelected: state.data.burgerSelected
});

const mapDispatchToProps = (dispatch) => ({
  clickApplyBurger: () => dispatch(clickApplyBurger()),
  clickCancelBurger: () => dispatch(clickCancelBurger())
});

export default connect(mapStateToProps, mapDispatchToProps)(PageBurger);
