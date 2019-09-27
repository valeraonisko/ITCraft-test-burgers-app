import React from 'react';
import {connect} from 'react-redux';
import { Row } from 'reactstrap';

import MenuItem from './MenuItem';
import { selectIsError, selectIsMenuLoaded, selectMenuMap } from '../redux/selectors';
import { clickBurger } from '../redux/actions';


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
  isError: selectIsError(state),
  isMenuLoaded: selectIsMenuLoaded(state),
  menuMap: selectMenuMap(state),
  requestError: state.data.requestError
});

const mapDispatchToProps = (dispatch) => ({
  clickBurger: (id) => dispatch(clickBurger(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageMenu);
