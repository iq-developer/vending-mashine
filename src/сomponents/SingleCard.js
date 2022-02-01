import { useState } from "react";
import { Typography, Grid, Card, CardContent, CardActionArea } from "@mui/material";

const SingleCard = ({card}) => {

  const [cardIsSelected, setCardIsSelected] = useState(false);

  const holderCardClick = (event) => {
    setCardIsSelected(!cardIsSelected);
  }
  
  return (  
      <Grid item key={card.id} xs={6} sm={4} md={3} lg={2}>

        <CardActionArea onClick={holderCardClick}> 
          <Card
          sx={{
            backgroundImage: `url(${card.img})`,
            backgroundSize: "200%",
            backgroundPosition: "bottom",
            borderRadius: "20px",
          }}>
            <CardContent
            sx={{
              textAlign: "center",
              backgroundColor: cardIsSelected ? "rgba(25,118,210,0.5);" : "rgba(255,255,255,0.9)",
              // marginTop: "30px",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.5)",
                cursor: "pointer"
              },
              "&:last-child": {
                paddingBottom: "1px",
              }
            }}>
              <Typography
                id={card.id}
                variant="h5"
                gutterBottom
                color={cardIsSelected ? "#fff" : "#656565"}
              >
                {card.name}
              </Typography>
              <Typography
                id={card.id}
                variant="h4"
                gutterBottom
                fontWeight="700" 
                color={cardIsSelected ? "#fff" : "#353535"}
              >
                {card.price}
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>

      </Grid>
  );
}

export default SingleCard;
