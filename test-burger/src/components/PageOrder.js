import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions';
import BurgerOrder from './BurgerOrder';

export class PageOrder extends React.Component {
  render () {
    const { burgerOrder, clickNewBurger, clickFinishOrder } = this.props;
    return (<BurgerOrder burgerOrder={burgerOrder}
      burgerAddClick={clickNewBurger} finishOrderClick={clickFinishOrder}/>);
  }
}

const mapStateToProps = (state) => ({
    burgerOrder: state.burgerOrder
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
  // clickNewBurger: () => dispatch(clickNewBurger()),
  // clickFinishOrder: () => dispatch(clickFinishOrder())
});

export default connect(mapStateToProps, mapDispatchToProps)(PageOrder);
