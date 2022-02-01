import { Box, Toolbar, Typography } from "@mui/material";


const Footer = () => {

  return (
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
        <Typography variant="h6" color="inherit" noWrap>
          Footer
        </Typography>
      </Toolbar>
    </Box>
  );
}

export default Footer;
