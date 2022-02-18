import { Box } from "@mui/material";
import Panel from "./Panel";
import { useSelector } from "react-redux";
import quantity from "../helpers/quantity";
import sum from "../helpers/sum";
import { useDispatch } from "react-redux";
import { updateDepositedSum, updateMashineSum, showDepositedPanel, showUserPanel } from "../store/actions";
import { useEffect } from "react";

const Footer = () => {

  const { userCoins, depositedCoins, mashineCoins, options, amounts } = useSelector(state => state);
  const dispatch = useDispatch();
  const userSum = sum(userCoins);
  const depositedSum = sum(depositedCoins);
  const mashineSum = sum(mashineCoins);
  const {selectedSum} = amounts;

  useEffect(()=>{
    dispatch(updateDepositedSum(depositedSum));
    dispatch(updateMashineSum(mashineSum));
    if (depositedSum) dispatch(showDepositedPanel(true));
    if (selectedSum) dispatch(showUserPanel(true));
  }, [userSum, depositedSum, mashineSum, selectedSum])

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
        quantity={quantity(mashineCoins)}
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
        quantity={quantity(depositedCoins)}
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
        quantity={quantity(userCoins)}
        sum={userSum}
        show={options.showUserPanel}
        panelId="1"
      />
    </Box>
  );
}

export default Footer;
