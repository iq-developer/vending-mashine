import "./App.css";
import Cards from "./сomponents/Cards";
import { createTheme, ThemeProvider } from "@mui/material";
import Footer from "./сomponents/Footer";
import Header from "./сomponents/Header";

function App() {

  /* For theme customization */
  const theme = createTheme({
    palette: {

    },
    components: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: "body3"
            },
            style: {
              fontSize: 9
            }
          }
        ]
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Cards />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
