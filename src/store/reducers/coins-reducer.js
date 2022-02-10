import userMoney from "../../data/userMoney.json";

export default function reducer(state = userMoney, action) {

  switch (action.type) {

    case 'INSERT_COIN':
      return state.map(item => {
        if (item.id === action.payload.id)
          return { ...item, quantity: item.quantity - 1 }
        return item;
      });

    default:
      return state;
  }
}
