/** @format */

import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import { HashRouter, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import "./css/App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path='/' exact={true} component={Home} />
      <Route path='/about' component={About} />
      <Route path='/movie-detail' component={Detail} />
    </HashRouter>
  );
}

export default App;
