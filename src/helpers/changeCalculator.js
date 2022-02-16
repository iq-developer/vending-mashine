const changeCalculator = (data, difference, isReturnRest = false) => {

  const reversedData = [...data].reverse();

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
    console.log('No appropriate coins in mashine to give a change' );
  } else {
    return result.reverse();
  }

}

export default changeCalculator;
