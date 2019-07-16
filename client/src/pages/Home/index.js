import React, { Component } from "react";

import DeleteModal from '../../components/DeleteModal';

import './style.css';

class Home extends Component {

    render (){
        return (
            <div>
                <DeleteModal/>
            </div>
        );
    }
}

export default Home;