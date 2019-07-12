import React, { Component } from "react";
import './style.css';

import RegDevice from '../../components/RegDevice'

class Dashboard extends Component {

    render (){
        return (
            <div>
                <RegDevice userID={this.props.userID} email={this.props.email} firstName={this.props.firstName} lastName={this.props.lastName} />
            </div>
        );
    }
}

export default Dashboard;