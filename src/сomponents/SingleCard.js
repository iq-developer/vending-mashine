import { Typography, Grid, Card, CardContent, CardActionArea } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleItem }  from "../store/actions";
import color from "../color";

const SingleCard = ({card}) => {
  const { id, isSelected } = card;
  const dispatch = useDispatch();
 
  return (  
      <Grid item key={card.id} xs={6} sm={4} md={3} lg={2}>

        <CardActionArea onClick={() => dispatch(toggleItem(id))}> 
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
              backgroundColor: isSelected ? color("blue", 0.5) : color("white", 0.9),
              // marginTop: "30px", // uncomment to display image part in card
              "&:hover": {
                backgroundColor: color("white", 0.5),
                cursor: "pointer"
              },
              "&:last-child": {
                paddingBottom: "1px",
              }
            }}
            id={card.id}
            >
              <Typography
                id={card.id}
                variant="h5"
                gutterBottom
                color={isSelected ? color("white") : color("gray")}
              >
                {card.name}
              </Typography>
              <Typography
                id={card.id}
                variant="h4"
                gutterBottom
                fontWeight="700" 
                color={isSelected ? color("white") : color("darkgray")}
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
