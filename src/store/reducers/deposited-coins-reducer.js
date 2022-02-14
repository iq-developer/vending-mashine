import depositedMoney from "../../data/depositedMoney.json"

const defaultState = depositedMoney ? depositedMoney : [];

export default function reducer(state = defaultState, action) {

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
