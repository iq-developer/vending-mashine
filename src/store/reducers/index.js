import { combineReducers } from "redux";
import ItemsReducer from "./items-reducer";
import UserCoinsReducer from "./user-coins-reducer";
import MashineCoinsReducer from "./mashine-coins-reducer";
import DepositedCoinsReducer from "./deposited-coins-reducer";
import SumReducer from "./sum-reducer";
import OptionsReducer from "./options-reducer";

const allReducers = combineReducers({
  items: ItemsReducer,
  userCoins: UserCoinsReducer,
  mashineCoins: MashineCoinsReducer,
  depositedCoins: DepositedCoinsReducer,
  amounts: SumReducer,
  options: OptionsReducer,
});

export default allReducers;
