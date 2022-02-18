import { Toolbar, Container } from "@mui/material";
import Coins from "./Coins";
import TopToolbar from "../сomponents/TopToolbar";

const Panel = ({title, itemName, topBgColor, bottomBgColor, data, quantity, sum, show, panelId}) => {

  return (
    <>
      { show 
        ? <>
        <TopToolbar
        title={title}
        itemName={itemName}
        topBgColor={topBgColor}
        data={data}
        quantity={quantity}
        sum={sum}
        panelId={panelId}
      />

      <Toolbar sx={{
        backgroundColor: bottomBgColor,
      }}>
        <Container
          maxWidth="sm"
        >
          <Coins
            data={data}
            panelId={panelId}
          />
        </Container>
      </Toolbar>
        </>
        : ""
      }
      

    </>

  );
}

export default Panel;
