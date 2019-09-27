import rootReducer from '../redux/reducers';
import {applyMiddleware, createStore} from 'redux';
import thunk from "redux-thunk";


export default function configureStore(initialState) {
    const store = createStore(rootReducer, applyMiddleware(thunk));

    if (module.hot) {
        module.hot
            .accept('../redux/reducers', () => {
                const nextRootReducer = require('../redux/reducers/index');
                store.replaceReducer(nextRootReducer);
            });
    }

    return store;

}
