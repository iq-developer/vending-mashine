import items from "../../data/items.json"

const defaultState = items ? items : [];

const itemsWithQuantity = defaultState.map(item => {
  return {...item, quantity: 1}
});

export default function reducer(state = itemsWithQuantity, action) {

  switch (action.type) {

    case "TOGGLE_ITEM":
      return state.map(item => {
        if (item.id === action.payload.id)
          return { ...item, isSelected: !item.isSelected }
        return item;
      });

    case "REMOVE_SELECTED_ITEMS":
      return state.map(item => {
        if (item.isSelected)
          return { ...item, isSold: true }
        return item;
      });

    default:
      return state;
  }
}
