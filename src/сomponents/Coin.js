import { Button } from "@mui/material"

const Coin = () => {

  const denominations = [ "1p", "2p", "5p", "10p", "20p", "50p", "£1", "£2"];

  return (

    denominations.map((item, index) => {
      return (
        <Button
          variant="contained"
          color="primary"
          size="medium"
          disabled
          sx={{
            borderRadius: "40px",
            padding: "20px",
            margin: "0 5px"
          }}
          key={index}
        >
          {item}
        </Button>
      )
    })

  )
}

export default Coin;
