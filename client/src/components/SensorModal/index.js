import React, { Component } from "react";
import './style.css';

function Form() {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Sensor Name</label>
                    <input type="name" className="form-control" id="sensorNameInput" aria-describedby="emailHelp" placeholder="Temperature Sensor"/>
                </div>
            </form>
        </div>
    );
}


class SensorModal extends Component {
    render() {

        return (
            <>
                {/* Button Trigger Modal For testing purposes only */}
                {/*                 <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#deleteModal">
                    Login
                </button> */}

                {/* Modal */}
                <div className="modal fade" id="sensorModal" tabIndex="-1" role="dialog" aria-labelledby="addSensor" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addSensor">Add Sensor</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <Form />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-success" data-dismiss="modal">Add Sensor</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SensorModal;