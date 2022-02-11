import options from "./options";

const {currencyName} = options;

const currency = (amount, isRound = true) => {
  switch (currencyName ) {
    case "Pound":
      return isRound ? `£${amount}` : `${amount}p`;
    case "Dollar":
      return isRound ? `$${amount}` : `${amount}¢`;
    default:
      return isRound ? `$${amount}` : `${amount}¢`;
  }
}

export default currency;
