import { Button } from "@mui/material";
import { ArrowCircleUp } from "@mui/icons-material"
import { useSelector, useDispatch } from "react-redux";
import { depositedToMashine, mashineFromDeposited, removeSelectedItems, mashineToDeposited, depositedFromMashine, showMashinePanel, showSnackbar } from "../store/actions";
import { useState } from "react";
import changeCalculator from "../helpers/changeCalculator"

const PayButton = () => {

  const {amounts, mashineCoins, depositedCoins, snackbar} = useSelector(state => state);

  const {depositedSum, selectedSum} = amounts;

  const disabled = amounts.selectedSum ? amounts.selectedSum > amounts.depositedSum : true;

  const dispatch = useDispatch();


  const displayMessage = (message = "something happened", severity = "info") => {
    dispatch(showSnackbar(message, severity));
  }

  const handlerPayClick = (id) => {

    const difference = depositedSum - selectedSum;

    if (amounts.mashineSum > difference) {

      const possibleChange = changeCalculator(mashineCoins, depositedCoins, difference, true);

      if (possibleChange) {
        
        const possibleMashineCoins = changeCalculator(mashineCoins, depositedCoins, difference);
  
        dispatch(mashineFromDeposited(depositedCoins));
        dispatch(depositedToMashine());
        dispatch(removeSelectedItems());
        displayMessage("Payment succesful!", "success");

        setTimeout(() => {
          dispatch(mashineToDeposited(possibleMashineCoins));
          dispatch(depositedFromMashine(possibleChange));
        }, 1000);

      } else {
        dispatch(showMashinePanel(true));
        displayMessage("There is no appropriate coins in mashine to give a change", "error");
      }

    } else {
      dispatch(showMashinePanel(true));
      displayMessage("Not enought money in mashine to to give change", "error");
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
