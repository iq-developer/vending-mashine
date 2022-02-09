import { combineReducers } from "redux";
import ItemsReducer from "./items-reducer";
import CoinsReducer from "./coins-reducer";
import MashineCoinsReducer from "./mashine-coins-reducer";
import DepositedCoinsReducer from "./deposited-coins-reducer"

const allReducers = combineReducers({
  cards: ItemsReducer,
  coins: CoinsReducer,
  mashineCoins: MashineCoinsReducer,
  depositedCoins: DepositedCoinsReducer,
});

export default allReducers;
