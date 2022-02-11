import { Box, Toolbar, Container, Button } from "@mui/material";
import PayButton from "./PayButton";
import { useDispatch } from "react-redux";
import { updateSum }  from "../store/actions";
import currency from "../helpers/currency"

const TopToolbar = ({title, itemName, topBgColor, data, isCards}) => {

  const dispatch = useDispatch();
 
  let quantity = 0;
  let sum = 0;

  if (isCards) { // if cards data

    const cardsSelected = data.filter(item => item.isSelected);

    quantity = cardsSelected.length;

    sum = cardsSelected.reduce((acc, current) => acc + current.price, 0);

  } else { // if coins data
    
    quantity = data.length;

    sum = data.reduce((acc, current) => {
      return  acc + current.quantity * current.value;
    }, 0);

  }

  dispatch(updateSum(sum));

  return (
    <Toolbar sx={{
      backgroundColor: topBgColor,
    }}>
    <Container>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        margin: "0 auto",
        fontSize: "20px"
      }}>

        <Box p={1}>
          {title}:
        </Box>

        <Box p={1}>
          {quantity} {itemName}
        </Box>

        <Box p={1}>
          {currency(sum.toFixed(2))}
        </Box>

        {title === "Deposited" ? <PayButton /> : ""}
        
      </Box>
    </Container>
    </Toolbar>
  )
}

export default TopToolbar;
