import { About, Careers, Home, Location } from "./pages/index";
import { Navbar } from "./components/layout/navbar/index";
import { Footer } from "./components/layout/footer/index";
import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/careers'>
          <Careers />
        </Route>
        <Route path='/location'>
          <Location />
        </Route>
        <Route path='*'>
          <h1>404</h1>
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
