import { Toolbar, Container } from "@mui/material";
import Coins from "./Coins";
import TopToolbar from "../сomponents/TopToolbar";


const Panel = ({title, itemName, topBgColor, bottomBgColor, data, quantity, sum}) => {

  return (
    <>
      <TopToolbar
        title={title}
        itemName={itemName}
        topBgColor={topBgColor}
        data={data}
        quantity={quantity}
        sum={sum}
      />

      <Toolbar sx={{
        backgroundColor: bottomBgColor,
      }}>
        <Container sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}>
          <Coins
            data={data}
            title={title}
          />
        </Container>
      </Toolbar>
    </>
  );
}

export default Panel;
