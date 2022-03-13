import { Container, Toolbar, Box } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material"
import TopToolbar from "../сomponents/TopToolbar";

const Header = ( {props} ) => {

  const {selectedSum, selectedQuantity, selectedItems, items} = props;

  return (
    <Box
      sx={{
      color: "#fff",
      position: "fixed",
      top: 0,
      bottom: "auto",
      left: 0,
      right: 0,
      zIndex: 1,
    }}>
      <Toolbar sx={{
        backgroundColor: "primary.main",
      }}>
      <Container>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
          fontSize: "20px"
        }}>
          { selectedItems.length
          ? <TopToolbar
              title="Selected"
              itemName="items"
              data={items}
              quantity={selectedQuantity}
              sum={selectedSum}
          />
          : <>
            <Box mr={2}>
              <ShoppingCart />
            </Box>
            <h3>Vending mashine</h3>
          </>}
        </Box>
      </Container>
      </Toolbar>

    </Box>
  );
}

export default Header;
