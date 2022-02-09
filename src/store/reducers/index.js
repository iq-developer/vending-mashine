import { combineReducers } from "redux";
import ItemsReducer from "./items-reducer";
import CoinsReducer from "./coins-reducer";

const allReducers = combineReducers({
  cards: ItemsReducer,
  coins: CoinsReducer,
});

export default allReducers;
