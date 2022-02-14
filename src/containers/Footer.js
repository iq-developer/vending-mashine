import { Box } from "@mui/material";
import Panel from "./Panel";
import { useSelector } from "react-redux";
import quantity from "../helpers/quantity";
import sum from "../helpers/sum";
import { useDispatch } from "react-redux";
import { updateDepositedSum } from "../store/actions";
import { useEffect } from "react";

const Footer = () => {

  const userCoins = useSelector(state => state.userCoins);
  const depositedCoins = useSelector(state => state.depositedCoins);
  const mashineCoins = useSelector(state => state.mashineCoins);

  const dispatch = useDispatch();

  const depositedSum = sum(depositedCoins);

  useEffect(()=>{
    dispatch(updateDepositedSum(depositedSum));
  })

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
        title="Mashine"
        itemName="coins"
        topBgColor="secondary.main"
        bottomBgColor="secondary.light"
        data={mashineCoins}
        quantity={quantity(mashineCoins)}
        sum={sum(mashineCoins)}
      />

      <Panel
        title="Deposited"
        itemName="coins"
        topBgColor="success.main"
        bottomBgColor="success.light"
        data={depositedCoins}
        quantity={quantity(depositedCoins)}
        sum={depositedSum}
      />
      <Panel
        title="Your money"
        itemName="coins"
        topBgColor="primary.dark"
        bottomBgColor="primary.light"
        data={userCoins}
        quantity={quantity(userCoins)}
        sum={sum(userCoins)}
      />
    </Box>
  );
}

export default Footer;
