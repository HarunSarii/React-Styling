import "./App.css";
import StyledComponents from "./components/styled-comp/index";
import Buttons from "./components/material-ui/buttons/Buttons";
import CheckBoxComp from "./components/material-ui/checkbox/CheckBoxComp";
import TextFieldComp from "./components/material-ui/text-field/TextFieldComp";
import StyledButton from "./components/material-ui/styled-button/StyledButton";
import Typography from "./components/material-ui/typography/TypographyComp";
import Wrapper from "./components/material-ui/wrapper/Wrapper";
import Cards from "./components/material-ui/cards/Cards";
import AppBarComp from "./components/material-ui/app-bar/AppBarComp";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange, green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 38,
      marginBottom: 5,
    },
    subtitle1: {
      marginBottom: 10,
    },
  },
  palette: {
    primary: {
      main: orange[400],
    },
    secondary: {
      main: green[400],
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <AppBarComp />
        <div className="App">
          <header className="App-header">
            <Typography />
            <StyledButton />
            <Cards />
            <TextFieldComp />
            <CheckBoxComp />
            <Buttons />
            {/* <StyledComponents /> */}
          </header>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
}
export default App;
