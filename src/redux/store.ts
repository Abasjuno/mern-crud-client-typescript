import { createStore, applyMiddleware } from "redux";
import createSagaMiddelware from "redux-saga"
import {composeWithDevTools} from "redux-devtools-extension"
import reducer from "./reducers/rootReducer";
import rootSaga from "./sagas/employeeSaga";

const sagaMiddleware = createSagaMiddelware()
const configureStore = () => {
    const Store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(rootSaga);
    return Store
}

const Store = configureStore();
export default Store;

