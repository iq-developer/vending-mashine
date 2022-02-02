import { Box, Toolbar, Typography, Button } from "@mui/material";
import { textAlign } from "@mui/system";
import Coin from "./Coin";


const Footer = () => {

  return (
    <>
    <Box
      sx={{
      color: "#fff",
      backgroundColor: 'primary.dark',
      position: 'fixed',
      top: 'auto',
      bottom: 0,
      left: 0,
      right: 0,
    }}>
      <Toolbar sx={{
        backgroundColor: 'success.main',
      }}>
        <Typography
          variant="h6"
          color="inherit"
          pl={5}
          m="0 auto"
          noWrap
        >
          Deposited: 1 coin £ 0.50
        </Typography>

      </Toolbar>

      <Toolbar sx={{
        backgroundColor: 'success.light',
      }}>
        <Coin m="0 auto" />   
      </Toolbar>


      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          pl={5}
          m="0 auto"
          noWrap
        >
          Your balance:  5 coins £ 5.50
        </Typography>

      </Toolbar>

      <Toolbar sx={{
        backgroundColor: 'primary.light',
      }}>
        <Coin />  
      </Toolbar>
    </Box>


    </>
  );
}

export default Footer;
