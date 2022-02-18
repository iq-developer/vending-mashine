import { Box } from "@mui/material";
import Panel from "./Panel";
import { useSelector } from "react-redux";
import quantity from "../helpers/quantity";
import sum from "../helpers/sum";
import { useDispatch } from "react-redux";
import { updateDepositedSum, updateMashineSum } from "../store/actions";
import { useEffect } from "react";

const Footer = () => {

  const userCoins = useSelector(state => state.userCoins);
  const depositedCoins = useSelector(state => state.depositedCoins);
  const mashineCoins = useSelector(state => state.mashineCoins);
  const options = useSelector(state => state.options);

  const dispatch = useDispatch();

  const depositedSum = sum(depositedCoins);
  const mashineSum = sum(mashineCoins);

  useEffect(()=>{
    dispatch(updateDepositedSum(depositedSum));
    dispatch(updateMashineSum(mashineSum));
  })

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
        sum={sum(mashineCoins)}
        show={options.showMashinePanel}
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
      />
      <Panel
        title="Your money"
        itemName="coins"
        topBgColor="primary.dark"
        bottomBgColor="primary.light"
        data={userCoins}
        quantity={quantity(userCoins)}
        sum={sum(userCoins)}
        show={options.showUserPanel}
      />
    </Box>
  );
}

export default Footer;
