import { Grid, Container} from "@mui/material";
import SingleCard from "./SingleCard";
import { useSelector } from "react-redux";

const Cards = () => {

  const items = useSelector(state => state.cards);

  return (
    <main className="main">
      <Container maxWidth="lg">
        <Grid container spacing={4} pt={10}>
            {items.map((item, index) => (
              <SingleCard card={item} key={index} />
            ))}   
        </Grid>
      </Container>  
    </main>
  );
}

export default Cards;
