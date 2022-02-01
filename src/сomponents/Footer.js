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
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
        >
          Footer
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
        Your coins
        </Typography>

        <Coin />  
        
      </Toolbar>
    </Box>


    </>
  );
}

export default Footer;
