import { Button } from "@mui/material";
import { ArrowCircleUp } from "@mui/icons-material"
import { useSelector, useDispatch } from "react-redux";
import { updateDepositedSum } from "../store/actions";

const PayButton = () => {

  const amounts = useSelector(state => state.amounts);

  const disabled = amounts.selectedSum > amounts.depositedSum;

  const dispatch = useDispatch();

  const handlerPayClick = () => {

  }

  return (
    <Button
      variant="contained"
      color="secondary"
      endIcon={<ArrowCircleUp />}
      disabled={disabled}
      onClick={handlerPayClick}
    >
     Pay 
    </Button>
  );
}

export default PayButton;
