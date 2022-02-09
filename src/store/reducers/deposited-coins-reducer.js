import depositedMoney from "../../data/depositedMoney.json"

export default function reducer(state = depositedMoney, action) {

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
