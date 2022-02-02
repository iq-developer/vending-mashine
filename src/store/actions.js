export const toggleSelectCard = item => ({
  type: 'TOGGLE_SELECT_CARD',
  payload: item,
});

export const toggleTask = id => ({
  type: 'TASK_TOGGLE',
  payload: { id }
});
