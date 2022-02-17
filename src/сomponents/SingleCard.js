import { Card, CardActionArea, CardContent, Grid, Slide } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleItem } from "../store/actions";
import color from "../helpers/color";
import CardTypo from "../containers/CardTypo";
import { useState } from "react";

const SingleCard = ({item}) => {

  const dispatch = useDispatch();

  const handleCardClick = (id) => {
    dispatch(toggleItem(id));
  }

  return (
    <Grid item key={item.id} xs={6} sm={4} md={3} lg={2}>

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
              // marginTop: "30px", // uncomment to display image part in item
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
            <CardTypo data={item}/>

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
