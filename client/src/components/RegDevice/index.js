import React, { Component } from 'react';
//import { Link } from "react-router-dom";

import API from "../../utils/API";

import "./style.css";
import Ajalogo from "../../assets/images/aja-logo@2x.png";

class RegDevice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deviceList: [],
            deviceID: ''
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

        API.saveDevice({
            MAC: this.state.deviceID,
            email: this.props.email
          })
          .then((res) => {console.log(res)})
          .catch(err => console.log(err));
        

      }

    render ()
    {
        return (
            <div className="container">

                <div className="row mt-5">
                    <div className="col-xs-12 text-center mx-auto">
                        <h1 className="aja">{this.props.firstName}'s Dashboard</h1>
                        <img className="logo img-fluid" src={Ajalogo} alt="Aja App logo"/>
                        <h5>Add a Device</h5>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-sm-12 mx-auto">
                        <form className="space text-center" id="signup" name="signup">
                            <div className="form-group">
                                <input className="text" name="deviceID" type="name" placeholder="00:a0:c9:14:c8:29"
                                onChange={this.handleChange} value={this.state.deviceID} />
                            </div>
                            <input className="btn button" type="submit" value="Let's Grow!" onClick={this.handleSubmit} />
                        </form>
                    </div>
                </div>

            </div>
        ); 
    }                   
}
                
export default RegDevice;