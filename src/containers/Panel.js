import { Box, Toolbar, Container } from "@mui/material";
import Coins from "./Coins";


const Panel = ({Title, topBgColor, bottomBgColor, coinsQuantity, moneySum, coinsData}) => {

  return (
    <>
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
            {Title}
          </Box>
          <Box width="90px">
            {coinsQuantity} coins
          </Box>
          <Box width="80px">
            £ {moneySum}
          </Box>     
        </Box>
      </Container>
      </Toolbar>

      <Toolbar sx={{
        backgroundColor: bottomBgColor,
      }}>
        <Container sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}>
          <Coins coinsData={coinsData}/>
        </Container>
      </Toolbar>
    </>
  );
}

export default Panel;
