import { applyMiddleware, createStore } from "redux";
import rootReduser from "./redux/Redusers";
import {thunk} from "redux-thunk";
const store = createStore(rootReduser,applyMiddleware(thunk));
export default store;