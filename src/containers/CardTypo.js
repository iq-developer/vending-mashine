import { Typography } from "@mui/material";
import colorFunc from "../helpers/color";
import currency from "../helpers/currency";

const CardTypo = ({data, options}) => {

  const { id } = data; 

  const defaultOptions = {
    value: 'name',
    variant: 'h5',
    color: 'gray',
    gutterBottom: true,
    fontWeight: 400,
  }

  const {variant, color, gutterBottom, fontWeight, value} = {...defaultOptions, ...options}

  const text = (typeof data[value] === 'number') ? currency(data[value], true) : data[value];

  const colorA = data.isSelected ? colorFunc("white") : colorFunc(color);

  return (
    <Typography
      id={id}
      variant={variant}
      color={colorA}
      gutterBottom={gutterBottom}
      fontWeight={fontWeight}
    >
      {text}
    </Typography>
  )
}

export default CardTypo;
