import userMoney from "../../data/userMoney.json";

const defaultState = userMoney ? userMoney : [];

export default function reducer(state = defaultState, action) {

  switch (action.type) {

    case 'USER_TO_DEPOSITED':
      return state.map(item => {
        if (item.id === action.payload.id)
          return { ...item, quantity: item.quantity - 1 }
        return item;
      });

    case 'USER_FROM_DEPOSITED':
      return state.map(item => {
        if (item.id === action.payload.id)
          return { ...item, quantity: item.quantity + 1 }
        return item;
      });  

    default:
      return state;
  }
}
