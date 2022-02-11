import {Card, CardActionArea, CardContent, Grid} from "@mui/material";
import {useDispatch} from "react-redux";
import {toggleItem} from "../store/actions";
import color from "../helpers/color";
import H5 from "../containers/H5";

const SingleCard = ({card}) => {

  const dispatch = useDispatch();

  return (
    <Grid item key={card.id} xs={6} sm={4} md={3} lg={2}>

      <CardActionArea onClick={() => dispatch(toggleItem(card.id))}>
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
              backgroundColor: card.isSelected ? color("blue", 0.5) : color("white", 0.9),
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
            <H5 data={card}/>

            <H5 data={card} options={{
              value: 'price',
              variant: 'h4',
              fontWeight: "700"
            }}
            />
            <H5
              name={card.price}
              id={card.id}
              variant="h4"
              fontWeight="700"
              color={card.isSelected ? color("white") : color("darkgray")}
            />
          </CardContent>
          </Card>
        </CardActionArea>

      </Grid>
  );
}

export default SingleCard;
