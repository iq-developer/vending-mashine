import { Card, CardActionArea, CardContent, Grid, Slide } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleItem, hideSnackbar } from "../store/actions";
import color from "../helpers/color";
import CardTypo from "../containers/CardTypo";
import { settings } from "../helpers/settings";

const SingleCard = ({ item }) => {

  const dispatch = useDispatch();
  const { showImagePart } = settings;

  const handleCardClick = (id) => {
    dispatch(toggleItem(id));
    dispatch(hideSnackbar());
  }

  return (
    <Grid item key={item.id} xs={6} sm={4} md={3} lg={3}>

      <Slide direction="down" in={!item.isSold} mountOnEnter unmountOnExit>
        <CardActionArea onClick={() => handleCardClick(item.id)}>
          <Card
            sx={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "200%",
              backgroundPosition: "bottom",
              borderRadius: "20px",
            }}>
            <CardContent
              sx={{
                textAlign: "center",
                backgroundColor: item.isSelected ? color("blue", 0.5) : color("white", 0.9),
                marginTop: showImagePart ? "30px" : "0",
                "&:hover": {
                  backgroundColor: color("white", 0.5),
                  cursor: "pointer"
                },
                "&:last-child": {
                  paddingBottom: "1px",
                }
              }}
              id={item.id}
            >
              <CardTypo data={item} />

              <CardTypo data={item} options={{
                value: 'value',
                variant: 'h4',
                fontWeight: "700"
              }}
              />

            </CardContent>
          </Card>
        </CardActionArea>
      </Slide>



    </Grid>
  );
}

export default SingleCard;
