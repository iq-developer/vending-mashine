import { createStore } from "redux";
import reducer from "./reducers/items-reducer";
import allReducers from "./reducers"

const store = createStore(allReducers);

export default store;
