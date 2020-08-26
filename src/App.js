import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

function App(){
  return (
  <HashRouter>
    <Route path="/Home" component={Home} />
    <Route path="/About" component={About}/>
  </HashRouter>
  )
}

export default App;