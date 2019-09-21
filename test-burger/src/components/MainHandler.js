import {connect} from 'react-redux';
import {loadMenu, dropRedirect, clickBurger, clickApplyBurger, clickCancelBurger,
  clickAddOption, clickDecOption,
  clickNewBurger, clickFinishOrder} from '../redux/actions';
import Main from './Main';
import {selectRedirect, selectMenuMap, selectBurgerSelected, selectOptionsSelected, selectBurgerOrder,
     selectIsMenuLoaded, selectIsError, selectRequestError} from '../redux/selectors';

function mapStateToProps(state) {
  return {
    redirect: selectRedirect(state),
    isMenuLoaded: selectIsMenuLoaded(state),
    isError: selectIsError(state),
    menuMap: selectMenuMap(state),
    burgerSelected: selectBurgerSelected(state),
    optionsSelected: selectOptionsSelected(state),
    burgerOrder: selectBurgerOrder(state),
    requestError: selectRequestError(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    loadMenu: () => dispatch(loadMenu()),
    dropRedirect: () => dispatch(dropRedirect()),
    clickBurger: (id) => dispatch(clickBurger(id)),
    clickAddOption: (code) => dispatch(clickAddOption(code)),
    clickDecOption: (code) => dispatch(clickDecOption(code)),
    clickApplyBurger: () => dispatch(clickApplyBurger()),
    clickCancelBurger: () => dispatch(clickCancelBurger()),
    clickNewBurger: () => dispatch(clickNewBurger()),
    clickFinishOrder: () => dispatch(clickFinishOrder())

  };
};

const MainHandler = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainHandler;
