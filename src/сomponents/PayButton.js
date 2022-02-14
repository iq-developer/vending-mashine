import { Button } from "@mui/material";
import { ArrowCircleUp } from "@mui/icons-material"



const PayButton = () => {



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
