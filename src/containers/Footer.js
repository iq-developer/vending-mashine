import { Box } from "@mui/material";
import Panel from "./Panel";
import { useSelector } from "react-redux";

const Footer = () => {

  const coins = useSelector(state => state.coins);
  const depositedCoins = useSelector(state => state.depositedCoins);

  return (
    <Box
      sx={{
      color: "#fff",
      position: 'fixed',
      top: 'auto',
      bottom: 0,
      left: 0,
      right: 0,
    }}>
      <Panel
        title="Deposited"
        itemName="coins"
        topBgColor="success.main"
        bottomBgColor="success.light"
        data={depositedCoins}
        
      />
      <Panel
        title="Your money"
        itemName="coins"
        topBgColor="primary.dark"
        bottomBgColor="primary.light"
        data={coins}
      />
    </Box>
  );
}

export default Footer;
