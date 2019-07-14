import React, { Component } from "react";
import './style.css';

import RegDevice from '../../components/RegDevice';
import Device from '../../components/Device';

import API from "../../utils/API";


class Dashboard extends Component {

    state = {
        userID: '',
        email: '',
        firstName: '',
        lastName: '',
        deviceList: []
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

    render (){
        return (
            <div>
                <RegDevice email={this.props.email} firstName={this.props.firstName} lastName={this.props.lastName} />
                <div className="container">
                    <div className="row">
                        {
                            this.state.deviceList.map(item => {
                                return (<Device id={item._id} MAC={item.MAC} name={item.name} />);
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;