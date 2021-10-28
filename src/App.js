import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navigate from "./components/Nav";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Education from "./components/Edu";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigate />
        <Switch>
          <Route path="/proj" component={Projects} />
          <Route path="/edu" component={Education} />
          <Route path="/" component={Main} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
