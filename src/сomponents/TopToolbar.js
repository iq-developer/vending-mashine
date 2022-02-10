import { Box, Toolbar, Container } from "@mui/material";

const TopToolbar = ({title, itemName, topBgColor, data, isCards}) => {
 
  let quantity, sum;

  if (isCards) {

    const cardsSelected = data.filter(item => item.isSelected);

    quantity = cardsSelected.reduce(acc => ++acc, 0);

    sum = cardsSelected.reduce((acc, current) => acc + +current.price, 0);

  } else {
    
    quantity = data.reduce((acc, current) => acc + current.quantity, 0);

    sum = data.reduce((acc, current) => {
      const denominationInPence = current.isPound ? current.denomination : current.denomination / 100;
      return  acc + current.quantity * denominationInPence;
    }, 0);

  }

  return (
    <Toolbar sx={{
      backgroundColor: topBgColor,
    }}>
    <Container>
      <Box sx={{
        display: "flex",
        width: "300px",
        margin: "0 auto",
        fontSize: "20px"
      }}>
        <Box width="130px">
          {title}:
        </Box>
        <Box width="90px">
          {quantity} {itemName}
        </Box>
        <Box width="80px">
          £ {sum.toFixed(2)}
        </Box>     
      </Box>
    </Container>
    </Toolbar>
  )
}

export default TopToolbar;
