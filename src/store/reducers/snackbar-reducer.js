export default function reducer(state = {
  message: "Please select some items to buy",
  severity: "info",
  show: true,
}, action) {

  switch (action.type) {

    case 'SHOW_SNACKBAR':
      return {
        ...state,
        message: action.payload.message,
        severity:  action.payload.severity,
        show: true,
      };

    case 'HIDE_SNACKBAR':
      return {
        ...state,
        show: false,
      };

    default:
      return state;
  }
}
