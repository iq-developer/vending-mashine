import { useSelector } from "react-redux";
import SingleCoin from "./SingleCoin";

const Coins = () => {

  const coins = useSelector(state => state.coins);

  return (
    <SingleCoin coins={coins} />
  )
}

export default Coins;
