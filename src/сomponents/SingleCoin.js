import { Button, Badge, Box } from "@mui/material"
import { useDispatch } from "react-redux";
import { userToDeposited, depositedFromUser, showSnackbar, userFromDeposited, depositedToUser }  from "../store/actions";
import { useState } from "react";
import isZero from "../helpers/isZero";

const SingleCoin = ({id, quantity, name, panelId}) => {

  const dispatch = useDispatch();
  const [animated, setAnimated] = useState("");

  const dispatchAnimatedCoins = (id, moneyback) => {
    if (moneyback) {
      dispatch(depositedToUser(id));
      dispatch(userFromDeposited(id));
    } else {
      dispatch(userToDeposited(id));
      dispatch(depositedFromUser(id));
    }
    setAnimated(`animated ${moneyback ? "animated-down" : ""}`);
    setTimeout(() => setAnimated(""), 500);
  }

  const handleCoinClick = (id) => {
    switch (panelId) {
      case "1":
        dispatchAnimatedCoins(id);
        break;
      case "2":
        dispatchAnimatedCoins(id, true);
        break;
      case "3":
        dispatch(showSnackbar("You can't operate mashine money. Them are for preview only", "warning"));
        break;
      default:
        dispatch(showSnackbar("System error: panel id missed", "error"));
        break;
    }
  }

  return (
    <Box
      margin="20px 7px"
      >
      <Badge
        badgeContent={quantity}
        color="primary"
      >
        <Button
          className={animated}
          onClick={() => handleCoinClick(id)}
          variant="contained"
          color="inherit"
          size="medium"
          disabled={isZero(quantity)}
          sx={{
            borderRadius: "40px",

            color: "#000",
            padding: {
              xs: "4px 8px",
              sm: "12px",
              md: "20px",
            },
            minWidth: {
              xs: "16px",
              sm: "48px",
              md: "64px",
            },
          }}
        >
          {name}
        </Button>
      </Badge>
    </Box>
  )

}

export default SingleCoin;
