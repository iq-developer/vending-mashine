import { Button } from "@mui/material";
import { ArrowCircleUp } from "@mui/icons-material"
import { useSelector, useDispatch } from "react-redux";
import { depositedToMashine, mashineFromDeposited } from "../store/actions";

const PayButton = () => {

  const amounts = useSelector(state => state.amounts);

  const disabled = amounts.selectedSum ? amounts.selectedSum > amounts.depositedSum : true;

  const depositedCoins = useSelector(state => state.depositedCoins);

  console.log('depositedCoins:', depositedCoins);

  const dispatch = useDispatch();

  const handlerPayClick = (id) => {
    dispatch(mashineFromDeposited(depositedCoins));
    dispatch(depositedToMashine());
  }

  return (
    <Button
      variant="contained"
      color="secondary"
      endIcon={<ArrowCircleUp />}
      disabled={disabled}
      onClick={() => handlerPayClick()}
    >
     Pay 
    </Button>
  );
}

export default PayButton;
