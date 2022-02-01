import { Grid, Container} from "@mui/material";
import cards from "../data.json"
import SingleCard from "./SingleCard";

const Cards = () => {
  
  return (
    <main className="main">
      <Container maxWidth="lg">
        <Grid container spacing={4} pt={10}>
            {cards.map((card) => (
              <SingleCard card={card} />
            ))}   
        </Grid>
      </Container>  
    </main>
  );
}

export default Cards;
