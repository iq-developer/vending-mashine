import { Button } from "@mui/material";
import { ArrowCircleUp } from "@mui/icons-material"
import { useSelector, useDispatch } from "react-redux";
import { depositedToMashine, mashineFromDeposited, removeSelectedItems, mashineToDeposited, depositedFromMashine, showMashinePanel, showSnackbar } from "../store/actions";
import changeCalculator from "../helpers/changeCalculator";


const PayButton = () => {

  const {amounts, mashineCoins, depositedCoins} = useSelector(state => state);

  const {depositedSum, selectedSum, mashineSum} = amounts;

  const disabled = selectedSum ? selectedSum > depositedSum : true;

  const dispatch = useDispatch();


  const handlerPayClick = () => {

    const difference = depositedSum - selectedSum;

    if (mashineSum > difference) {

      const possibleChange = changeCalculator(mashineCoins, depositedCoins, difference, true);

      if (possibleChange) {
        
        const possibleMashineCoins = changeCalculator(mashineCoins, depositedCoins, difference);
  
        dispatch(mashineFromDeposited(depositedCoins));
        dispatch(depositedToMashine());
        dispatch(removeSelectedItems());
        dispatch(showSnackbar("Payment succesful!", "success"));

        /* return change */
        setTimeout(() => {
          dispatch(mashineToDeposited(possibleMashineCoins));
          dispatch(depositedFromMashine(possibleChange));
        }, 1000);

      } else {
        dispatch(showMashinePanel(true));
        dispatch(showSnackbar("There is no appropriate coins in mashine to give a change", "error"));
      }

    } else if (difference = 0) {

    } else {
      dispatch(showMashinePanel(true));
      dispatch(showSnackbar("Not enought money in mashine to to give change", "error"));
    }

  }

  return (
    <>
    <Button
      variant="contained"
      color="secondary"
      endIcon={<ArrowCircleUp />}
      disabled={disabled}
      onClick={() => handlerPayClick()}
    >
     Pay 
    </Button>
    </>
  );
}

export default PayButton;
