import React, { Component } from "react";
import './style.css';

/* Socket.io */
import openSocket from 'socket.io-client';

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

class Device extends Component {

    render(){
        return (
            <div className = "col">
                <div className = "card mt-2 mb-2">
                    <div className = "card-body piContainer">
                      <div className = "row">
                          <div className = "col-9">
                              <h5>ID</h5>
                              <h5>Light</h5>
                              <h5>Temp</h5>
                          </div>
                          <div className = "col-3">
                            <btn class="btn btn-info pi m-1" id="18" onclick="return" light="false"><i class="far fa-lightbulb"></i></btn>
                            <btn class="btn btn-danger piDel m-1" del="18"><i class="fas fa-trash-alt"></i></btn>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Device;