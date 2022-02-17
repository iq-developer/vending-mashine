import { Button } from "@mui/material";
import { ArrowCircleUp } from "@mui/icons-material"
import { useSelector, useDispatch } from "react-redux";
import { depositedToMashine, mashineFromDeposited, removeSelectedItems, mashineToDeposited, depositedFromMashine } from "../store/actions";
import CustomizedSnackbars from "./CustomizedSnackbars"
import { useState } from "react";
import changeCalculator from "../helpers/changeCalculator"

const PayButton = () => {

  const {amounts, mashineCoins, depositedCoins} = useSelector(state => state);

  const {depositedSum, selectedSum} = amounts;

  const disabled = amounts.selectedSum ? amounts.selectedSum > amounts.depositedSum : true;

  const dispatch = useDispatch();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("something happened");
  const [severity, setSeverity] = useState("error");

  const displayMessage = (message, severity) => {
    if (message) setMessage(message);
    if (severity) setSeverity(severity);
    setOpenSnackbar(true);
  }

  const handlerPayClick = (id) => {

    const difference = depositedSum - selectedSum;

    if (amounts.mashineSum > difference) {

      const possibleChange = changeCalculator(mashineCoins, depositedCoins, difference, true);

      if (possibleChange) {
        
        const possibleMashineCoins = changeCalculator(mashineCoins, depositedCoins, difference);
        console.log('possibleChange:', possibleChange);
        console.log('possibleMashineCoins:', possibleMashineCoins);
  
        dispatch(mashineFromDeposited(depositedCoins));
        dispatch(depositedToMashine());
        dispatch(removeSelectedItems());
        displayMessage("Payment succesful!", "success");

        setTimeout(() => {
          dispatch(mashineToDeposited(possibleMashineCoins));
          dispatch(depositedFromMashine(possibleChange));
        }, 1000);

      } else {
        displayMessage("There is no appropriate coins in mashine to give a change");
      }

    } else {
      displayMessage("Not enought money in mashine to to give change");
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
    <CustomizedSnackbars
      severity={severity}
      message={message}
      openSnackbar={openSnackbar}
      setOpenSnackbar={setOpenSnackbar}
     />
    </>
  );
}

export default PayButton;
