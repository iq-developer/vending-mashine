import mashineMoney from "../../data/mashineMoney.json"

export default function reducer(state = mashineMoney, action) {

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
