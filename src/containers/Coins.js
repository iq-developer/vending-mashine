import SingleCoin from "../сomponents/SingleCoin";

const Coins = ({data, panelId}) => {

  return (
    data.map(item => {
      return (
      <SingleCoin
        id={item.id}
        name={item.name}
        quantity={item.quantity}
        panelId={panelId}
        key={item.id}
      />

    )})
  )

}

export default Coins;
