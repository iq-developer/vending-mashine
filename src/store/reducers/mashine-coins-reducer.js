import mashineMoney from "../../data/mashineMoney.json"

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
    quantity: 4,
  },
  {
    id: 3, 
    value: 0.05,
    name: "5p",
    quantity: 6,
  },
  {
    id: 4,
    value: 0.10,
    name: "10p",
    quantity: 3,
  },
  {
    id: 5,
    value: 0.20,
    name: "20p",
    quantity: 5,
  },
  {
    id: 6,
    value: 1,
    name: "£1",
    quantity: 7,
  },
  {
    id: 7,
    value: 2,
    name: "£2",
    quantity: 1,
  }
]

export default function reducer(state = defaultMoney, action) {

  switch (action.type) {

    case 'ITEM_TOGGLE':
      return state.map(item => {
        if (item.id === action.payload.id)
          return { ...item, isSelected: !item.isSelected }
        return item;
      });

    default:
      return state;
  }
}
