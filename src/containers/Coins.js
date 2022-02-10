import { useSelector } from "react-redux";
import SingleCoin from "../сomponents/SingleCoin";

const Coins = ({data, title}) => {

  const coins = useSelector(state => state.coins);

  return (
    <SingleCoin coins={data} title={title} />
  )
}

export default Coins;
