import "./App.css";
import NavBar from "./components/navBar/nav";
import Footer from "./components/footer/footer";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
