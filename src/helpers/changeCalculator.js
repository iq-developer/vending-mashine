const changeCalculator = (mashineCoins, depositedCoins, difference, isReturnRest = false) => {

  const accesibleCoins = mashineCoins.map((item, index) => {
    return { ...item, quantity: item.quantity + depositedCoins[index].quantity }
  });

  const reversedData = [...accesibleCoins].reverse();

  const convertToCoins = (value) => {
    return Math.round(value * 100);
  }

  let restInCoins = convertToCoins(difference);
  
  const result = reversedData.map(item => {
    let itemQuantity = item.quantity;
    let restQuantity = 0;
    const itemValueInCoins = convertToCoins(item.value);

    while ((itemQuantity > 0) && (restInCoins >= itemValueInCoins)) { 
      itemQuantity--;
      restQuantity++;
      restInCoins = restInCoins - itemValueInCoins;
    }

    return {...item, quantity: (isReturnRest ? restQuantity : itemQuantity)};

  });

  if (restInCoins) {
    return false;
  } else {
    return result.reverse();
  }

}

export default changeCalculator;
