import depositedMoney from "../../data/depositedMoney.json"

export default function reducer(state = depositedMoney, action) {

  switch (action.type) {

    case 'RECEIVE_COIN':
      return state.map(item => {
        if (item.id === action.payload.id)
          return { ...item, quantity: item.quantity + 1 }
        return item;
      });

    case 'GIVE_COIN':
      return state.map(item => {
        if (item.id === action.payload.id)
          return { ...item, quantity: item.quantity - 1 }
        return item;
      });

    default:
      return state;
  }
}
