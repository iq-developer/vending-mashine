import { useSelector } from "react-redux";
import SingleCoin from "../сomponents/SingleCoin";

const Coins = ({coinsData}) => {

  const coins = useSelector(state => state.coins);

  return (
    <SingleCoin coins={coinsData} />
  )
}

export default Coins;
