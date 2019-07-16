import React, { Component } from "react";
import './style.css';

import RegDevice from '../../components/RegDevice';
import Device from '../../components/Device';
import DeleteModal from '../../components/DeleteModal';
import SensorModal from '../../components/SensorModal';

import API from "../../utils/API";


class Dashboard extends Component {

    state = {
        userID: '',
        email: '',
        firstName: '',
        lastName: '',
        deviceList: [],
        devID: '',
        devMAC: '',
        devName: ''
    }

    componentDidMount(){

        API.getUser(this.props.userID)
            .then( (user) => {

                console.log(user.data);

                this.setState({
                    userID: user.data._id,
                    email: user.data.email,
                    firstName: user.data.firstName,
                    lastName: user.data.lastName,
                    deviceList: user.data.deviceList  
                });

                }).catch(err => console.log(err));

    }

    componentDidUpdate(){

        API.getUser(this.props.userID)
            .then( (user) => {

                console.log(user.data);

                this.setState({
                    userID: user.data._id,
                    email: user.data.email,
                    firstName: user.data.firstName,
                    lastName: user.data.lastName,
                    deviceList: user.data.deviceList 
                });

                }).catch(err => console.log(err));

    }

    passDeviceData(devData){
        console.log(devData);
        this.setState({
            devID: devData.id,
            devMAC: devData.MAC,
            devName: devData.name
        });
    }

    render (){
        return (
            <div>
                <RegDevice userID={this.props.userID} email={this.props.email} firstName={this.props.firstName} lastName={this.props.lastName} />
                <div className="container">
                    <div className="row">
                        {
                            this.state.deviceList.map(item => {
                                return (<Device id={item._id} MAC={item.MAC} name={item.name} passDeviceData={this.passDeviceData} />);
                            })
                        }
                    </div>
                    <DeleteModal devName={this.state.devName} userID={this.props.userID} email={this.props.email} firstName={this.props.firstName} lastName={this.props.lastName}/>
                    <SensorModal devName={this.state.devName} userID={this.props.userID} email={this.props.email} firstName={this.props.firstName} lastName={this.props.lastName}/>

                </div>
            </div>
        );
    }
}

export default Dashboard;