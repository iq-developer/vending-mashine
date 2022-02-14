import { Button, Badge, Box } from "@mui/material"
import { useDispatch } from "react-redux";
import { userToDeposited, depositedFromUser, depositedToUser, userFromDeposited }  from "../store/actions";

const SingleCoin = ({coins, title}) => {

  const dispatch = useDispatch();

  const handleCoinClick = (id) => {
    if (title === "Your money") {
      dispatch(userToDeposited(id));
      dispatch(depositedFromUser(id));
    } else {
      dispatch(depositedToUser(id));
      dispatch(userFromDeposited(id));
    }
  }

  return (
    coins.map(item => {
      return (
        <Box
          margin="20px 10px"
          key={item.id}
          >
          <Badge 
            badgeContent={item.quantity}
            color="primary"
          >
            <Button
              onClick={() => handleCoinClick(item.id)}
              variant="contained"
              color="inherit"
              size="medium"
              disabled={!item.quantity}
              sx={{
                borderRadius: "40px",
                padding: "20px",
                color: "#000"
              }}
            >
              {item.name}
            </Button>
          </Badge>
        </Box>
      )
    })

  )
}

export default SingleCoin;
