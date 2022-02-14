export default function reducer(state = {
  userSum: 0,
  depositedSum: 0,
  selectedSum: 0,
  mashineSum: 0
}, action) {

  switch (action.type) {

    case 'UPDATE_USER_SUM':
      return {...state, userSum: action.payload.sum};

    case 'UPDATE_DEPOSITED_SUM':
        return {...state, depositedSum: action.payload.sum};

    case 'UPDATE_SELECTED_SUM':
      return {...state, selectedSum: action.payload.sum};

    case 'UPDATE_MASHINE_SUM':
      return {...state, mashineSum: action.payload.sum};

    default:
      return state;
  }
}
