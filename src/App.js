import Main from "./Main";
import { createTheme, ThemeProvider } from "@mui/material";
import './index.css'
import { useState,useEffect } from "react";
import Login from "./Login";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
      const loggedInStatus = sessionStorage.getItem('isLoggedIn');
      if (loggedInStatus === 'true') {
          setIsLoggedIn(true);
      }
  }, []);

  const handleLogin = () => {
      setIsLoggedIn(true);
      sessionStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
      setIsLoggedIn(false);
      sessionStorage.removeItem('isLoggedIn');
  };

  return (
    <ThemeProvider theme={theme}>      

      {isLoggedIn ? (
                <Main onLogout={handleLogout} />
            ) : (
                <Login onLogin={handleLogin} />
            )}
    </ThemeProvider>        
  );
}

export default App;
