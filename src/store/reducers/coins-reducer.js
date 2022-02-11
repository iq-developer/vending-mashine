import userMoney from "../../data/userMoney.json";

//Todo: implement useEffect

const defaultMoney = [
  {
    value: 0.01,
    name: "1p",
    quantity: 0,
  },
  {
    value: 0.02,
    name: "2p",
    quantity: 4,
  },
  {
    value: 0.05,
    name: "5p",
    quantity: 6,
  },
  {
    value: 0.10,
    name: "10p",
    quantity: 3,
  },
  {
    value: 0.20,
    name: "20p",
    quantity: 5,
  },
  {
    value: 1,
    name: "£1",
    quantity: 7,
  },
  {
    value: 2,
    name: "£2",
    quantity: 1,
  }
]

export default function reducer(state = defaultMoney, action) {

  switch (action.type) {

    case 'INSERT_COIN':
      return state.map(item => {
        if (item.id === action.payload.id)
          return { ...item, quantity: item.quantity - 1 }
        return item;
      });

    case 'RETURN_COIN':
      return state.map(item => {
        if (item.id === action.payload.id)
          return { ...item, quantity: item.quantity + 1 }
        return item;
      });  

    default:
      return state;
  }
}
