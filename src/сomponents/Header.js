import { AppBar, Container, IconButton, Toolbar, Typography, Box } from "@mui/material";
import { Menu, ShoppingCart } from "@mui/icons-material"
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {

  const dispatch = useDispatch();
  const items = useSelector(state => state);

  return (
    <>
    <Box
      sx={{
      color: "#fff",
      position: 'fixed',
      top: 0,
      bottom: 'auto',
      left: 0,
      right: 0,
    }}>

      <Toolbar sx={{
        backgroundColor: 'primary.main',
      }}>
      <Container>
        <Box sx={{
          display: "flex",
          width: "300px",
          margin: "0 auto",
          fontSize: "20px"
        }}>
          {items.cards.find(item => item.isSelected) ? <Cart/> : <h3>Vending mashine</h3>}
        </Box>
      </Container>
      </Toolbar>

    </Box>


    </>
  );
}

export default Header;  
