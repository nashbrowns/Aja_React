import React, { Component } from 'react';
import { Link } from "react-router-dom";

import API from "../../utils/API";

import "./style.css";
import Ajalogo from "../../assets/images/aja-logo@2x.png";

class RegForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
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

        event.preventDefault();

        API.saveUser({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
          })
            .then((res) => {

                console.log(res);

                if(res.status === 200){
                    alert("registration successful");
                }
            })
            .catch(err => console.log(err));

        this.setState({
            email: '',
            firstName: '',
            lastName: '',
            password: ''
        });

      }

    render ()
    {
        return (
            <div className="container">

                <div className="row mt-5">
                    <div className="col-xs-12 text-center mx-auto">
                        <h1 className="aja">WELCOME TO AJA</h1>
                        <img className="logo img-fluid" src={Ajalogo} alt="Aja App logo"/>
                            <h5>Create an account to start growing <i className="fas fa-seedling"></i></h5>
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
                                <input name="firstName" type="text" placeholder="First Name" 
                                onChange={this.handleChange} value={this.state.firstName} />
                            </div>
                            <div className="form-group">
                                <input name="lastName" type="text" placeholder="Last Name" 
                                onChange={this.handleChange} value={this.state.lastName} />
                            </div>
                            <div className="form-group">
                                <input name="password" type="password" placeholder="Password" 
                                onChange={this.handleChange} value={this.state.password} />
                            </div>
                            <input className="btn button" type="submit" value="Let's Grow!" onClick={this.handleSubmit} />
                        </form>
                    </div>
                </div>

                <br/><br/><br/>

                <div className="row">
                    <div className="col-sm text-center">
                        <h5>Already have an Aja account?</h5>
                        <Link to="/login" className="btn button">
                            Login
                        </Link>
                    </div>
                </div>

            </div>
        ); 
    }                   
}
                
export default RegForm;