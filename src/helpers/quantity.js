const quantity = (data) => {
  return data.reduce((previous, current) => {
    return  previous + current.quantity;
  }, 0);
}

export default quantity;
