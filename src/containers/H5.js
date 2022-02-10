import { Typography } from "@mui/material";

const H5 = ({id, variant="h5", name, color, fontWeight="400"}) => {

  return (
    <Typography
      id={id}
      variant={variant}
      color={color}
      gutterBottom
      fontWeight={fontWeight}
    >
      {name}
    </Typography>
  )
}

export default H5;
