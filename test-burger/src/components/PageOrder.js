import React from 'react';
import {connect} from 'react-redux';

import BurgerOrder from './BurgerOrder';
import { selectBurgerOrder } from '../redux/selectors';
import { clickNewBurger, clickFinishOrder } from '../redux/actions';

export class PageOrder extends React.Component {
  render () {
    const { burgerOrder, clickNewBurger, clickFinishOrder } = this.props;
    return (<BurgerOrder burgerOrder={burgerOrder}
      burgerAddClick={clickNewBurger} finishOrderClick={clickFinishOrder}/>);
  }
}

const mapStateToProps = (state) => ({
    burgerOrder: selectBurgerOrder(state)
});

const mapDispatchToProps = (dispatch) => ({
  clickNewBurger: () => dispatch(clickNewBurger()),
  clickFinishOrder: () => dispatch(clickFinishOrder())
});

export default connect(mapStateToProps, mapDispatchToProps)(PageOrder);
