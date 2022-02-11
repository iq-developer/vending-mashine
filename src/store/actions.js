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


export const updateSum = sum => ({
  type: "UPDATE_SUM",
  payload: { sum }
});
