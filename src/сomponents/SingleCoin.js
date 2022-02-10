import { Button, Badge, Box } from "@mui/material"
import { useDispatch } from "react-redux";
import { insertCoin }  from "../store/actions";

const SingleCoin = ({coins}) => {

  const dispatch = useDispatch();

  console.log('coins:', coins);

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
              onClick={() => dispatch(insertCoin(item.id))}
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
