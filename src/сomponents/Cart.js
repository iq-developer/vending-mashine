import { ShoppingCart } from "@mui/icons-material"
import { IconButton} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {

  const dispatch = useDispatch();

  return (
    <IconButton color="inherit" disabled>
      <ShoppingCart
        title="Show selected items"
      />
    </IconButton>
  )
}

export default Cart;
