import React, { Component } from "react";
import './style.css';

/* Socket.io */
import openSocket from 'socket.io-client';

class Device extends Component {

    state = {
        deviceID: ''
    }

    componentDidMount(){

        const socket = openSocket(process.env.REACT_APP_API_URL);

        socket.on('connect', function(msg){
            console.log('user connected');
        });
        
        socket.on('device', function(number){
            console.log(number);
        });
        
        socket.on('light', function(lightState){
            console.log(lightState);
        });
        
    }

    passDeviceDataToParent(){
        let deviceData = {
            id: this.props.id,
            MAC: this.props.MAC,
            name: this.props.name
        }

        this.props.passDeviceData(deviceData);
    }

    render(){
        return (
            <div className = "col" key={this.props.id}>
                <div className = "card mt-2 mb-2">
                    <div className = "card-body piContainer">
                      <div className = "row">
                          <div className = "col-9">
                              <h5>{this.props.name}</h5>
                              <div className="sensorDiv">
                                  {/* List Sensors */}
                              </div>
                              <div className="controlDiv">
                                  {/* List Controllers */}
                              </div>
                          </div>
                          <div className = "col-3">

                            <div className="hoverDiv">
                                <btn className="btn btn-info m-1" del="18">
                                <i class="far fa-lightbulb"></i>
                                </btn>
                                <span className="hoverText">Add Controller</span>
                            </div>

                            <div className="hoverDiv">
                                <btn className="btn btn-success m-1 addSensor" data-toggle="modal" data-target="#sensorModal">
                                    <i class="fas fa-microscope"></i>
                                </btn>
                                <span className="hoverText">Add Sensor</span>
                            </div>

                            <div className="hoverDiv">
                                <btn className="btn btn-danger piDel m-1" data-toggle="modal" data-target="#deleteModal">
                                    <i class="fas fa-trash-alt"></i>
                                </btn>
                                <span className="hoverText">Delete Device</span>
                            </div>

                          </div>
                      </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Device;