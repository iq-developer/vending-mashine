import { Button, Badge, Box } from "@mui/material"
import { useDispatch } from "react-redux";
import { userToDeposited, depositedFromUser, depositedToUser, userFromDeposited }  from "../store/actions";
import { useState } from "react";

const SingleCoin = ({id, quantity, name, title}) => {

  const dispatch = useDispatch();

  const [animated, setAnimated] = useState("");

  const handleCoinClick = (id) => {
    if (title === "Your money") {
      dispatch(userToDeposited(id));
      dispatch(depositedFromUser(id));

      setAnimated("animated");
      setTimeout(() => setAnimated(""), 500);

    } else if (title === "Deposited"){
      dispatch(depositedToUser(id));
      dispatch(userFromDeposited(id));

      setAnimated("animated animated-down");
      setTimeout(() => setAnimated(""), 500);
    } else {
      console.log("you can't move mashine money");
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
