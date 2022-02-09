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
        Title="Deposited"
        topBgColor="success.main"
        bottomBgColor="success.light"
        coinsQuantity="5"
        moneySum="30"
        coinsData={depositedCoins}
      />
      <Panel
        Title="Your money"
        topBgColor="primary.dark"
        bottomBgColor="primary.light"
        coinsQuantity="10"
        moneySum="40"
        coinsData={coins}
      />
    </Box>
  );
}

export default Footer;
