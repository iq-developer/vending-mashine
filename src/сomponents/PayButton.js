import { Button } from "@mui/material";
import { ArrowCircleUp } from "@mui/icons-material"
import { useSelector, useDispatch } from "react-redux";
import { depositedToMashine, mashineFromDeposited } from "../store/actions";
import CustomizedSnackbars from "./CustomizedSnackbars"
import { useState } from "react";

const PayButton = () => {

  const amounts = useSelector(state => state.amounts);

  const disabled = amounts.selectedSum ? amounts.selectedSum > amounts.depositedSum : true;

  const depositedCoins = useSelector(state => state.depositedCoins);

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

    const difference = amounts.depositedSum - amounts.selectedSum;

    if (amounts.mashineSum > difference) {
      dispatch(mashineFromDeposited(depositedCoins));
      dispatch(depositedToMashine());
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
