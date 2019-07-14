import React, { Component } from 'react';

import API from "../../utils/API";

import "./style.css";
import Ajalogo from "../../assets/images/aja-logo@2x.png";

class RegDevice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deviceList: [],
            deviceID: '',
            name: ''
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
            name: this.state.name,
            MAC: this.state.deviceID,
            email: this.props.email
          })
          .then((res) => {
              console.log(res)
              if(res.status === 200){
                  alert("device registered");
              }
            })
          .catch(err => console.log(err));
        
        this.setState({
            deviceID: '',
            name: ''
        });
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
                            <div className="form-group">
                                <input className="text" name="name" type="name" placeholder="Tomato Monitor"
                                onChange={this.handleChange} value={this.state.name} />
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