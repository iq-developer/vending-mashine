import { Box, Toolbar, Typography, Button } from "@mui/material";
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
      right: 0
    }}>
      <Toolbar sx={{
        backgroundColor: 'success.main',
      }}>
        <Typography
          variant="h6"
          color="inherit"
          pl={5}
          noWrap
        >
          Deposited:
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          pl={5}
          noWrap
        >
          £ 0.50
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          pl={5}
          noWrap
        >
          1 coins
        </Typography>
      </Toolbar>

      <Toolbar sx={{
        backgroundColor: 'success.light',
      }}>
        <Typography
          variant="h6"
          color="inherit"
          p={5}
          noWrap
        >
        Dep. coins:
        </Typography >

        <Coin />  
        
      </Toolbar>


      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          pl={5}
          noWrap
        >
          Your balance:
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          pl={5}
          noWrap
        >
          £ 5.50
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          pl={5}
          noWrap
        >
          5 coins
        </Typography>
      </Toolbar>

      <Toolbar sx={{
        backgroundColor: 'primary.light',
      }}>
        <Typography
          variant="h6"
          color="inherit"
          p={5}
          noWrap
        >
        Your coins:
        </Typography>

        <Coin />  
        
      </Toolbar>
    </Box>


    </>
  );
}

export default Footer;
