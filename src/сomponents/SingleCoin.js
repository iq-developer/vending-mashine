import { Button, Badge, Box } from "@mui/material"
import { useDispatch } from "react-redux";
import { userToDeposited, depositedFromUser, depositedToUser, userFromDeposited, showDepositedPanel, showMashinePanel, showSnackbar }  from "../store/actions";
import { useState } from "react";
import { useSelector } from "react-redux";

const SingleCoin = ({id, quantity, name, title}) => {

  const {options} = useSelector(state => state);

  const dispatch = useDispatch();

  const [animated, setAnimated] = useState("");

  const handleCoinClick = (id) => {
    if (title === "Your money") {

      if (!options.showDepositedPanel){
        dispatch(showDepositedPanel(true));
      }
      setTimeout(() => dispatch(userToDeposited(id)), 100);
      setTimeout(() => dispatch(depositedFromUser(id)), 100);
      setAnimated("animated");
      setTimeout(() => setAnimated(""), 500);
      
    } else if (title === "Deposited"){

      setTimeout(() => dispatch(depositedToUser(id)), 100);
      setTimeout(() => dispatch(userFromDeposited(id)), 100);
      setAnimated("animated animated-down");
      setTimeout(() => setAnimated(""), 500);

    } else {
      dispatch(showSnackbar("You can't operate mashine money. Them are for preview only", "warning"));
    }

    if (options.showMashinePanel){
      dispatch(showMashinePanel(false));
    }

  }
      return (
        <Box
          margin="20px 10px"
          key={id}
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
              disabled={!quantity}
              sx={{
                borderRadius: "40px",
                padding: "20px",
                color: "#000"
              }}
            >
              {name}
            </Button>
          </Badge>
        </Box>
      )

}

export default SingleCoin;
