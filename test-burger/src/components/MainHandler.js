import {connect} from 'react-redux';
import {loadMenu, dropRedirect, clickBurger, clickApplyBurger, clickCancelBurger,
  clickNewBurger, clickFinishOrder} from '../redux/actions';
import Main from './Main';
import {selectUserName, selectRedirect, selectMenuMap, selectBurgerSelected, selectBurgerOrder,
     selectIsMenuLoaded, selectIsError, selectRequestError} from '../redux/selectors';

function mapStateToProps(state) {
  return {
    userName: selectUserName(state),
    redirect: selectRedirect(state),
    isMenuLoaded: selectIsMenuLoaded(state),
    isError: selectIsError(state),
    menuMap: selectMenuMap(state),
    burgerSelected: selectBurgerSelected(state),
    burgerOrder: selectBurgerOrder(state),
    requestError: selectRequestError(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    loadMenu: () => dispatch(loadMenu()),
    dropRedirect: () => dispatch(dropRedirect()),
    clickBurger: (id) => dispatch(clickBurger(id)),
    clickApplyBurger: () => dispatch(clickApplyBurger()),
    clickCancelBurger: () => dispatch(clickCancelBurger()),
    clickNewBurger: () => dispatch(clickNewBurger()),
    clickFinishOrder: () => dispatch(clickFinishOrder())

  };
};

const MainHandler = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainHandler;
