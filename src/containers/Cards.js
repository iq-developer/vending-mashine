import { Grid, Container} from "@mui/material";
import SingleCard from "../сomponents/SingleCard";
import { useSelector } from "react-redux";

const Cards = () => {

  const items = useSelector(state => state.items);

  return (
    <main className="main">
      <Container maxWidth="lg">
        <Grid container spacing={4} pt={10} pb={2}>
            {items.map((item, index) => (
              <SingleCard item={item} key={index} /> 
            ))}   
        </Grid>
      </Container>  
    </main>
  );
}

export default Cards;
