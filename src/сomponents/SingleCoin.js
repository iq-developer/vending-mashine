import { Button, Badge, Box } from "@mui/material"

const SingleCoin = ({coins}) => {

  return (

    coins.map((item, index) => {
      return (
        <Box
          margin="20px 10px"
          >
          <Badge 
            badgeContent={item.quantity}
            color="primary"
          >
            <Button
              variant="contained"
              color="inherit"
              size="medium"
              disabled={!item.quantity}
              sx={{
                borderRadius: "40px",
                padding: "20px",
                color: "#000"
              }}
              key={index}
            >
              {item.isPound ? '£' : ''}
              {item.denomination}
              {item.isPound ? '' : 'p'}
            </Button>
          </Badge>
        </Box>

      )
    })

  )
}

export default SingleCoin;
