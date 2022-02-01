import { Typography, Grid, Card, CardContent, Container } from "@mui/material";
import cards from "../data"

const Cards = () => {
  return (
    <main className="main">
      <Container maxWidth="lg">
        <Grid container spacing={4} pt={10}>

            {cards.map((card) => (
              <Grid item key={card.id} xs={6} sm={4} md={3} lg={2}>
                <Card style={{ backgroundImage: `url(${card.img})`, borderRadius: "20px"}}>
                  <CardContent sx={{
                    textAlign: "center",
                    backgroundColor: "rgba(255,255,255,0.9)",
                    marginTop: "50px",
                    "&:hover": {
                      background: "rgba(255,255,255,0.5)",
                      cursor: "pointer"
                    },
                    "&:last-child": {
                      paddingBottom: "1px",
                    }
                  }}>
                    <Typography variant="h5" gutterBottom fontWeight="700" color="#353535">
                      {card.name}
                    </Typography>
                    <Typography variant="h3" gutterBottom fontWeight="700" color="#353535">
                      {card.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}   

        </Grid>
      </Container>  
    </main>
  );
}

export default Cards;
