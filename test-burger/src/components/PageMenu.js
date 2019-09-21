import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions';
import MenuItem from './MenuItem';
import { Row } from 'reactstrap';

export class PageMenu extends React.Component {

  render () {
    const { isMenuLoaded, isError, menuMap, requestError, clickBurger} = this.props;
    if (isMenuLoaded) {
      const menu = menuMap.map(menuItem => (<MenuItem {...menuItem} key={menuItem.id}
        clickBurger={clickBurger}/>));
      return (<Row>{menu}</Row>)
     } else {
      return isError ? requestError : "Burger menu is loading..."
     }
  }
}

const mapStateToProps = (state) => ({
    menuMap: state.menuMap,
    isError: state.isError,
    isMenuLoaded: state.isMenuLoaded,
    requestError: state.requestError
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
  // clickBurger: (id) => dispatch(clickBurger(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageMenu);
