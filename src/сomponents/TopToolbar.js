import { Box, Toolbar, Container } from "@mui/material";
import PayButton from "./PayButton";
import currency from "../helpers/currency"

const TopToolbar = ({title, itemName, topBgColor, quantity, sum, id}) => {
 
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

        <Box p={1} pr={2}>
          {currency(sum)}
        </Box>

        {id === "2" ? <PayButton /> : ""}
        
      </Box>
    </Container>
    </Toolbar>
  )
}

export default TopToolbar;
