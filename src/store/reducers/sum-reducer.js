export default function reducer(state = {
  userSum: 0,
  depositedSum: 0,
  selectedSum: 0,
  mashineSum: 0
}, action) {

  switch (action.type) {

    case 'UPDATE_SUM':
      return {...state, userSum: action.payload.sum};

    default:
      return state;
  }
}
