import { Container, Toolbar, Box } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material"
import Cart from "./Cart";
import { useSelector } from "react-redux";

const Header = () => {

  const items = useSelector(state => state);

  return (
    <>
    <Box
      sx={{
      color: "#fff",
      position: "fixed",
      top: 0,
      bottom: "auto",
      left: 0,
      right: 0,
    }}>
      <Toolbar sx={{
        backgroundColor: "primary.main",
      }}>
      <Container>
        <Box sx={{
          display: "flex",
          width: "400px",
          margin: "0 auto",
          fontSize: "20px"
        }}>
          {items.cards.find(item => item.isSelected) ? <Cart/> : <><ShoppingCart /> <h3>Vending mashine</h3></>}
        </Box>
      </Container>
      </Toolbar>

    </Box>


    </>
  );
}

export default Header;  
