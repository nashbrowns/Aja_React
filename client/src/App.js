import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

  state = {
    email: "",
    firstName: "",
    lastName: "",
    isAuth: 0
  };

  logUserIn = (userData)=>{

    console.log(userData);

    this.setState({
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      isAuth: 1
    });

    console.log(this.state);

  }

  render(){
    return (
      <Router>
        <>
          <Navbar email={this.state.email} firstName={this.state.firstName} lastName={this.state.lastName} isAuth={this.state.isAuth} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" render={(props) => <Login {...props} logUserIn={this.logUserIn} />}/>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/about" component={About} />
          </Switch>
        </>
      </Router>
  );
}
}

export default App;
