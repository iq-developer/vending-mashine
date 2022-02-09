import cards from "../../data/items.json"

export default function reducer(state = cards, action) {

  switch (action.type) {

    case "ITEM_TOGGLE":
      return state.map(item => {
        if (item.id === action.payload.id)
          return { ...item, isSelected: !item.isSelected }
        return item;
      });

    default:
      return state;
  }
}
