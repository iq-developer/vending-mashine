import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material"
import Cart from "./Cart";

const Header = () => {

  return (
    <AppBar>
      <Toolbar>   

        <IconButton edge="start" color="inherit" aria-label="menu" mr={1} >
          <Menu />
        </IconButton>

        <Typography variant="h5" sx={{flexGrow: 1}}>
          Selected:  2 items £ 10.00 
        </Typography>

        <Cart />
        
      </Toolbar>
    </AppBar>
  );
}

export default Header;  
