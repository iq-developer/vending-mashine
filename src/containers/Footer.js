import { Box } from "@mui/material";
import Panel from "./Panel";

const Footer = ( {state, props} ) => {

  const { userCoins, depositedCoins, mashineCoins, options } = state;
  const { userSum, userQuantity, depositedSum, depositedQuantity, mashineSum, mashineQuantity } = props;

  return (
    <Box
      sx={{
      color: "#fff",
      position: "sticky",
      top: "auto",
      bottom: 0,
      left: 0,
      right: 0,
    }}>
      <Panel
        title="Mashine"
        itemName="coins"
        topBgColor="secondary.main"
        bottomBgColor="secondary.light"
        data={mashineCoins}
        quantity={mashineQuantity}
        sum={mashineSum}
        show={options.showMashinePanel}
        panelId="3"
      />

      <Panel
        title="Deposited"
        itemName="coins"
        topBgColor="success.main"
        bottomBgColor="success.light"
        data={depositedCoins}
        quantity={depositedQuantity}
        sum={depositedSum}
        show={options.showDepositedPanel}
        panelId="2"
      />
      <Panel
        title="Your money"
        itemName="coins"
        topBgColor="primary.dark"
        bottomBgColor="primary.light"
        data={userCoins}
        quantity={userQuantity}
        sum={userSum}
        show={options.showUserPanel}
        panelId="1"
      />
    </Box>
  );
}

export default Footer;
