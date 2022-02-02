import { Typography, Grid, Card, CardContent, CardActionArea } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleTask }  from "../store/actions";

const SingleCard = ({card}) => {
  const { id, isSelected } = card;
  const dispatch = useDispatch();
 
  return (  
      <Grid item key={card.id} xs={6} sm={4} md={3} lg={2}>

        <CardActionArea onClick={() => dispatch(toggleTask(id))}> 
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
              backgroundColor: isSelected ? "rgba(25,118,210,0.5);" : "rgba(255,255,255,0.9)",
              // marginTop: "30px",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.5)",
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
                color={isSelected ? "#fff" : "#656565"}
              >
                {card.name}
              </Typography>
              <Typography
                id={card.id}
                variant="h4"
                gutterBottom
                fontWeight="700" 
                color={isSelected ? "#fff" : "#353535"}
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
