import { ShoppingCart } from "@mui/icons-material"
import { IconButton, Box} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Cart = () => {

  const dispatch = useDispatch();
  const items = useSelector(state => state);
  //const [disabled, setDisabled] = useState(true); 

  return (
    <>
      <Box width="130px">
        Deposited: 
      </Box>
      <Box width="90px">
        5 coins
      </Box>
      <Box width="80px">
        £ 5.50
      </Box>
    </>
  )
}

export default Cart;
