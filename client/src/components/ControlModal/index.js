import React, { Component } from "react";
import './style.css';

function Form() {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Controller Name</label>
                    <input type="name" className="form-control" id="controllerNameInput" aria-describedby="emailHelp" placeholder="Water Pump"/>
                </div>
            </form>
        </div>
    );
}


class ControlModal extends Component {
    render() {

        return (
            <>
                {/* Button Trigger Modal For testing purposes only */}
                {/*                 <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#deleteModal">
                    Login
                </button> */}

                {/* Modal */}
                <div className="modal fade" id="controllerModal" tabIndex="-1" role="dialog" aria-labelledby="addController" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addController">Add Controller</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <Form />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-success" data-dismiss="modal">Add Controller</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ControlModal;