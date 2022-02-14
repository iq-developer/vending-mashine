export const toggleItem = id => ({
  type: "ITEM_TOGGLE",
  payload: { id }
});

export const insertCoin = id => ({
  type: "INSERT_COIN",
  payload: { id }
});

export const receiveCoin = id => ({
  type: "RECEIVE_COIN",
  payload: { id }
});

export const returnCoin = id => ({
  type: "RETURN_COIN",
  payload: { id }
});

export const giveCoin = id => ({
  type: "GIVE_COIN",
  payload: { id }
});


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
