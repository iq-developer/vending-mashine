import mashineMoney from "../../data/mashineMoney.json"

const defaultState = mashineMoney ? mashineMoney : [];

export default function reducer(state = defaultState, action) {

  switch (action.type) {

    case 'MASHINE_FROM_DEPOSITED':
      return state.map((item, index) => {
          return { ...item, quantity: item.quantity + action.payload.data[index].quantity }
      });

    default:
      return state;
  }
}
