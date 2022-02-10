import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const Cart = () => {

  const items = useSelector(state => state);

  return (
    <>
      <Box width="100px">
        Selected: 
      </Box>
      <Box width="100px">
        5 items
      </Box>
      <Box width="150px">
        Sum: £5.50
      </Box>
    </>
  )
}

export default Cart;
