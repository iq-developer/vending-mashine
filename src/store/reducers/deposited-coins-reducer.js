const defaultMoney = [
  {
    id: 1,
    value: 0.01,
    name: "1p",
    quantity: 0,
  },
  {
    id: 2,
    value: 0.02,
    name: "2p",
    quantity: 0,
  },
  {
    id: 3,
    value: 0.05,
    name: "5p",
    quantity: 0,
  },
  {
    id: 4,
    value: 0.10,
    name: "10p",
    quantity: 0,
  },
  {
    id: 5,
    value: 0.20,
    name: "20p",
    quantity: 0,
  },
  {
    id: 6,
    value: 1,
    name: "£1",
    quantity: 0,
  },
  {
    id: 7,
    value: 2,
    name: "£2",
    quantity: 0,
  }
]

export default function reducer(state = defaultMoney, action) {

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
