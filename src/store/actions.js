export const toggleItem = id => ({
  type: "ITEM_TOGGLE",
  payload: { id }
});

export const insertCoin = id => ({
  type: "INSERT_COIN",
  payload: { id }
});
