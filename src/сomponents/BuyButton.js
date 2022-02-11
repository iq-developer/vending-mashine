import { Button } from "@mui/material";
import { ArrowCircleUp } from "@mui/icons-material"

const BuyButton = () => {

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

export default BuyButton;
