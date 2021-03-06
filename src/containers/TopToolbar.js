import { Box, Toolbar, Container } from "@mui/material";
import PayButton from "../сomponents/PayButton";
import currency from "../helpers/currency"

const TopToolbar = ({title, itemName, topBgColor, quantity, sum, panelId}) => {



  return (
    <Toolbar sx={{
      backgroundColor: topBgColor,
    }}>
    <Container sx={{
      padding: 0
    }}>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        margin: "0 auto",
        fontSize: "20px",
      }}>

        <Box p={1}>
          {title}:
        </Box>

        <Box p={1}>
          {quantity}&nbsp;{itemName}{quantity === 1 ? "" : "s"}
        </Box>

        <Box p={1} pr={2}>
          {currency(sum)}
        </Box>

        {panelId === "2" ? <PayButton /> : ""}

      </Box>
    </Container>
    </Toolbar>
  )
}

export default TopToolbar;
