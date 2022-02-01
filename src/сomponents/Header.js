import { AppBar, Container, IconButton, Toolbar, Typography } from "@mui/material";

import { Menu } from "@mui/icons-material"

const Header = () => {

  return (
    <AppBar>
      <Toolbar>           
        <IconButton edge="start" color="inherit" aria-label="menu" mr={1} >
          <Menu />
        </IconButton>
        <Typography variant="h5" sx={{flexGrow: 1}}>Vending mashine</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;  
