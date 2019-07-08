import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

/* Page/Navbar imports */
import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home";
import Signup from "../src/pages/Signup";
import Login from "../src/pages/Login";
import Dashboard from "../src/pages/Dashboard";
import About from "../src/pages/About";

/* CSS import */
import "./App.css";

class App extends Component {


  render(){
    return (
      <Router>
        <>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/about" component={About} />
        </>
      </Router>
  );
}
}

export default App;
