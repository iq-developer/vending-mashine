import { Button, Badge, Box } from "@mui/material"
import { useDispatch } from "react-redux";
import { insertCoin, receiveCoin, returnCoin, giveCoin }  from "../store/actions";

const SingleCoin = ({coins, title}) => {

  const dispatch = useDispatch();

  const handleCoinClick = (id) => {
    if (title === "Your money") {
      dispatch(insertCoin(id));
      dispatch(receiveCoin(id));
    } else {
      dispatch(returnCoin(id));
      dispatch(giveCoin(id));
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
              {item.isPound ? "£" : ""}
              {item.denomination}
              {item.isPound ? "" : "p"}
            </Button>
          </Badge>
        </Box>
      )
    })

  )
}

export default SingleCoin;
