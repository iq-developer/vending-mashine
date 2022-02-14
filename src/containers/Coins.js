import SingleCoin from "../сomponents/SingleCoin";

const Coins = ({data, title}) => {

  return (
    <SingleCoin coins={data} title={title} />
  )
}

export default Coins;
