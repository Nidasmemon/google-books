import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/search";
import Saved from "./pages/saved"
import Nav from "./components/Nav";


function App() {
  return (
    <Router>
      <Nav />
      <Route exact path={["/", "/search"]} >
        <Search />
      </Route>
      <Route exact path={"/saved"}>
        <Saved />
      </Route>
    </Router>
  )



}

export default App;
