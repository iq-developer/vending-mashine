export default function reducer(state = {
  showUserPanel: false,
  showDepositedPanel: false,
  showMashinePanel: false,
}, action) {

  switch (action.type) {

    case 'SHOW_USER_PANEL':
      return {...state, showUserPanel: action.payload.boolean};

    case 'SHOW_DEPOSITED_PANEL':
        return {...state, showDepositedPanel: action.payload.boolean};

    case 'SHOW_MASHINE_PANEL':
      return {...state, showMashinePanel: action.payload.boolean};

    default:
      return state;
  }
}
