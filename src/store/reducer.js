// state = {
//   id: 1,
//   selected: true
// }

import cards from "../data.json"

export default function reducer(state = cards, action) {

  console.log('action.payload:', action.payload);

  switch (action.type) {

    case 'TASK_TOGGLE':
      return state.map(item => {
        if (item.id === action.payload.id)
          return { ...item, isSelected: !item.isSelected }
        return item;
      });

    default:
      return state;
  }
}
