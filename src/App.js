import Main from "./Main";
import { createTheme, ThemeProvider } from "@mui/material";
import './index.css'

const theme = createTheme({
  palette:{
    primary:{
      main:'#333333'
    },
    secondary:{
      main:'#9e9e9e',
    }    
  }
})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Main/>
    </ThemeProvider>        
  );
}

export default App;
