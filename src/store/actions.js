/* items */

export const toggleItem = id => ({
  type: "TOGGLE_ITEM",
  payload: { id }
});

export const removeSelectedItems = id => ({
  type: "REMOVE_SELECTED_ITEMS",
  payload: { id }
});

/* coins */

export const userToDeposited = id => ({
  type: "USER_TO_DEPOSITED",
  payload: { id }
});

export const depositedFromUser = id => ({
  type: "DEPOSITED_FROM_USER",
  payload: { id }
});

export const depositedToUser = id => ({
  type: "DEPOSITED_TO_USER",
  payload: { id }
});

export const userFromDeposited = id => ({
  type: "USER_FROM_DEPOSITED",
  payload: { id }
});

export const mashineFromDeposited = data => ({
  type: "MASHINE_FROM_DEPOSITED",
  payload: { data }
});

export const depositedToMashine = () => ({
  type: "DEPOSITED_TO_MASHINE"
});

export const mashineToDeposited = data => ({
  type: "MASHINE_TO_DEPOSITED",
  payload: { data }
});

export const depositedFromMashine = data => ({
  type: "DEPOSITED_FROM_MASHINE",
  payload: { data }
});

/* update Sum */

export const updateUserSum = sum => ({
  type: "UPDATE_USER_SUM",
  payload: { sum }
});

export const updateDepositedSum = sum => ({
  type: "UPDATE_DEPOSITED_SUM",
  payload: { sum }
});

export const updateSelectedSum = sum => ({
  type: "UPDATE_SELECTED_SUM",
  payload: { sum }
});

export const updateMashineSum = sum => ({
  type: "UPDATE_MASHINE_SUM",
  payload: { sum }
});

/* show/hide Panel */

export const showUserPanel = boolean => ({
  type: "SHOW_USER_PANEL",
  payload: { boolean }
});

export const showMashinePanel = boolean => ({
  type: "SHOW_MASHINE_PANEL",
  payload: { boolean }
});

export const showDepositedPanel = boolean => ({
  type: "SHOW_DEPOSITED_PANEL",
  payload: { boolean }
});
