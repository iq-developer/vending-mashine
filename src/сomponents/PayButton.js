import { Button } from "@mui/material";
import { ArrowCircleUp } from "@mui/icons-material"
import { useSelector } from "react-redux";

const PayButton = () => {

  const amounts = useSelector(state => state.amounts);

  const disabled = amounts.selectedSum > amounts.depositedSum;

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
