import options from "./options";

const { currencyName } = options;

const currency = (amount, hideSymbol = false) => {

  const amountFixed = amount.toFixed(2);

  switch (currencyName) {
    case "Pound":
      return hideSymbol ? `${amountFixed}` : `£${amountFixed}` ;
    case "Dollar":
      return hideSymbol ? `${amountFixed}` : `$${amountFixed}`;
    default:
      return hideSymbol ? `${amountFixed}` : `$${amountFixed}`;
  }
}

export default currency;
