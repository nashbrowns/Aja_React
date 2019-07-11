import React, { Component } from "react";
//import { Link } from "react-router-dom";

import API from "../../utils/API";

import "./style.css";
import Ajalogo from "../../assets/images/aja-logo@2x.png";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      }
    
      handleSubmit(event) {


        API.loginUser({
            email: this.state.email,
            password: this.state.password
          })
            .then( (res) => {
                console.log(res.data);
                if(res.data !== null){
                    alert(res.data.firstName);
                    
                } else{
                    alert("Incorrect Username or password");
                }
            })
            .catch(err => console.log(err));
        
      }

    render() {
        return (
            <div>
                <div className="container">

                    <div className="row mt-5">
                        <div className="col-xs-12 text-center mx-auto">
                            <img className="logo img-fluid" src={Ajalogo} alt="Aja App logo" />
                            <h5>Login <i className="fas fa-seedling"></i></h5>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-sm-12 mx-auto">
                            <form className="space text-center" id="signup" name="signup">
                                <div className="form-group">
                                    <input className="text" name="email" type="email" placeholder="Email Address"
                                        onChange={this.handleChange} value={this.state.email} />
                                </div>
                                <div className="form-group">
                                    <input name="password" type="password" placeholder="Password"
                                        onChange={this.handleChange} value={this.state.password} />
                                </div>
                                <input className="btn button" type="submit" value="Login" onClick={this.handleSubmit} />
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Login;