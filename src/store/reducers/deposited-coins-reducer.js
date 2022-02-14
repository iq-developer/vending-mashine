import depositedMoney from "../../data/depositedMoney.json"

const defaultState = depositedMoney ? depositedMoney : [];

export default function reducer(state = defaultState, action) {

  switch (action.type) {

    case 'DEPOSITED_FROM_USER':
      return state.map(item => {
        if (item.id === action.payload.id)
          return { ...item, quantity: item.quantity + 1 }
        return item;
      });

    case 'DEPOSITED_TO_USER':
      return state.map(item => {
        if (item.id === action.payload.id)
          return { ...item, quantity: item.quantity - 1 }
        return item;
      });

    case 'DEPOSITED_TO_MASHINE':
      return state.map(item => {
          return { ...item, quantity: 0 }
      });

    default:
      return state;
  }
}
