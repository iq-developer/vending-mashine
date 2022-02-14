import cards from "../../data/items.json"

const defaultState = cards ? cards : [];

const cardsWithQuantity = defaultState.map(item => {
  return {...item, quantity: 1}
});

export default function reducer(state = cardsWithQuantity, action) {

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
