import { useSelector } from "react-redux";
import SingleCoin from "../сomponents/SingleCoin";

const Coins = ({data}) => {

  const coins = useSelector(state => state.coins);

  return (
    <SingleCoin coins={data} />
  )
}

export default Coins;
