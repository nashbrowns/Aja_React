import React from 'react';
import { Link } from "react-router-dom";

import "./style.css";
import Ajalogo from "../../assets/images/aja-logo@2x.png";

function RegForm() {

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
                    <form className="space text-center" id="signup" name="signup" method="post" action="/signup">
                        <div className="form-group">
                            <input className="text" name="email" type="email" placeholder="Email Address" />
                        </div>
                        <div className="form-group">
                            <input name="firstname" type="text" placeholder="First Name" />
                        </div>
                        <div className="form-group">
                            <input name="lastname" type="text" placeholder="Last Name" />
                        </div>
                        <div className="form-group">
                            <input name="password" type="password" placeholder="Password" />
                        </div>
                        <input className="btn button" type="submit" value="Let's Grow!" />
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
                
export default RegForm;