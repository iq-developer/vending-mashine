import { Button } from "@mui/material";
import { ArrowCircleUp } from "@mui/icons-material"
import { useSelector } from "react-redux";


const PayButton = () => {

  const sum = useSelector(state => state.sum);

  return (
    <Button
      variant="contained"
      color="secondary"
      endIcon={<ArrowCircleUp />}
    >
     Pay 
    </Button>
  );
}

export default PayButton;
