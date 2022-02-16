import { Button } from "@mui/material";
import { ArrowCircleUp } from "@mui/icons-material"
import { useSelector, useDispatch } from "react-redux";
import { depositedToMashine, mashineFromDeposited, removeSelectedItems } from "../store/actions";
import CustomizedSnackbars from "./CustomizedSnackbars"
import { useState } from "react";
import changeCalculator from "../helpers/changeCalculator"

import defaultMoney from "../data/depositedMoney.json"
let possibleChange = defaultMoney ? defaultMoney : [];

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



  const giveChange = (depositedSum, selectedSum, mashineCoins, depositedCoins, difference) => {

    const accesibleCoins = mashineCoins.map((item, index) => {
      return { ...item, quantity: item.quantity + depositedCoins[index].quantity }
    });

    const possibleChange = changeCalculator(accesibleCoins, difference, true);

    const possibleMashineCoins = changeCalculator(accesibleCoins, difference);

    console.log('possibleChange:', possibleChange);

    console.log('possibleMashineCoins:', possibleMashineCoins);

  }

  

  const handlerPayClick = (id) => {

    const difference = depositedSum - selectedSum;

    if (amounts.mashineSum > difference) {

      giveChange(depositedSum, selectedSum, mashineCoins, depositedCoins, difference);

      //dispatch(mashineFromDeposited(depositedCoins));
      //dispatch(depositedToMashine());
      //dispatch(removeSelectedItems());
    } else {
      displayMessage("Not enought money in mashine to to give change from payment",);
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
