import SingleCoin from "../сomponents/SingleCoin";

const Coins = ({data, title}) => {

  return (
    data.map(item => {
      return (
      <SingleCoin
        id={item.id}
        name={item.name}
        quantity={item.quantity}
        title={title}
        key={item.id}
      />

    )})
  )

}

export default Coins;
