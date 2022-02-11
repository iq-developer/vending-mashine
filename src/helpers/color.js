const color = (name, opacity = 1) => {
  switch (name) {
    case "white":
      return `rgba(255, 255, 255, ${opacity})`;
    case "black":
        return `rgba(0, 0, 0, ${opacity})`;
    case "blue":
      return `rgba(25, 118, 210, ${opacity})`;
    case "gray":
      return `rgba(101, 101, 101, ${opacity})`;  
    case "darkgray":
      return `rgba(53, 53, 53, ${opacity})`;    
    default:
      return `rgba(255, 255, 255, ${opacity})`;
  }
}

export default color;
