const sum = (data) => {
  return data.reduce((previous, current) => {
    return  previous + current.quantity * current.value;
  }, 0);
}

export default sum;
