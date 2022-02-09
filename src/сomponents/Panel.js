import { Box, Toolbar, Typography, Button,  Container } from "@mui/material";
import { textAlign } from "@mui/system";
import Coins from "./Coins";


const Panel = ({Title, bgColor}) => {

  return (
    <>
    <Box
      sx={{
      color: "#fff",
      position: "fixed",
      top: "auto",
      bottom: 0,
      left: 0,
      right: 0,
    }}>

      <Toolbar sx={{
        backgroundColor: "success.main",
      }}>
      <Container>
        <Box sx={{
          display: "flex",
          width: "300px",
          margin: "0 auto",
          fontSize: "20px"
        }}>
          <Box width="130px">
            Deposited: 
          </Box>
          <Box width="90px">
            5 coins
          </Box>
          <Box width="80px">
            £ 5.50
          </Box>     
        </Box>
      </Container>
      </Toolbar>

      <Toolbar sx={{
        backgroundColor: "success.light",
      }}>
        <Container sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}>
          <Coins/>
        </Container>
      </Toolbar>



      <Toolbar sx={{
          backgroundColor: "primary.dark",
          display: "flex",
          justifyContent: "center"
        }}>
        <Container>
          <Box sx={{
            display: "flex",
            width: "300px",
            margin: "0 auto",
            fontSize: "20px"
          }}>
            <Box width="130px">
              Your money: 
            </Box>
            <Box width="90px">
              5 coins
            </Box>
            <Box width="80px">
              £ 5.50
            </Box>     
          </Box>
        </Container>
      </Toolbar>

      <Toolbar sx={{
        backgroundColor: "primary.light",
      }}>
        <Container sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}>
          <Coins/>
        </Container> 
      </Toolbar>
    </Box>


    </>
  );
}

export default Panel;
