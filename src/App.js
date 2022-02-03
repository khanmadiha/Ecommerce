import Header from "./components/Header";
import Home from "./components/Home";
import Kurtis from "./components/Kurtis";
import Juttis from "./components/Juttis";
import Potlis from "./components/Potlis";
import Bangles from "./components/Bangles";
import Contact from "./components/Contact";
import About from "./components/About"
import Error from "./components/Error";
import { createTheme, ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



//materil ui
// very very bad breakpoints never use it 

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 672.5,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/kurtis"} element={<Kurtis />} />
          <Route path={"/juttis"} element={<Juttis />} />
          <Route path={"/Potlis"} element={<Potlis />} />
          <Route path={"/bangles"} element={<Bangles />} />
          <Route path={"/contact-us"} element={<Contact />} />
<Route path = {"/about"} element = {<About />}/>
          {/* error page  */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
