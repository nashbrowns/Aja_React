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
    if(lightState === '0'){
        console.log('light off');
    }
    else if(lightState === '1'){
        console.log('light on');
    }
})

class Home extends Component {

    render (){
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
}

export default Home;