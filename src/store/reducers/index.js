import { combineReducers } from "redux";
import ItemsReducer from "./items-reducer";
import CoinsReducer from "./coins-reducer";
import MashineCoinsReducer from "./mashine-coins-reducer";
import DepositedCoinsReducer from "./deposited-coins-reducer"
import SumReducer from "./sum-reducer"

const allReducers = combineReducers({
  cards: ItemsReducer,
  coins: CoinsReducer,
  mashineCoins: MashineCoinsReducer,
  depositedCoins: DepositedCoinsReducer,
  amounts: SumReducer,
});

export default allReducers;
