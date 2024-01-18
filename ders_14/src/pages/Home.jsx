import AppBarResponsive from "../components/Appbar";
import   AppBar   from "../components/Appbar";
import CardGrid from "../components/CardGrid";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";
import { createTheme,ThemeProvider } from "@mui/material";

const Home = () => {
  const theme = createTheme({
    palette:{
      primary:{
        main: "#2a1",
        light: "#7dc973",
        dark: "#1a7b0d"
      }
    }
  })



  return (
    <ThemeProvider theme={theme}>
      {/* <TypoButtons />
      <TextFieldComp/> */}
      <AppBarResponsive/>
      <CardGrid/>
    </ThemeProvider>
  );
};

export default Home;
