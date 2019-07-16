import React, { Component } from "react";
import './style.css';


class DeleteModal extends Component {
    render() {

        return (
            <>
                {/* Button Trigger Modal For testing purposes only */}
                {/*                 <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#deleteModal">
                    Login
                </button> */}

                {/* Modal */}
                <div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Delete {this.props.devName}?</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Are you sure you want to delete {this.props.devName} from your account?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Delete Device</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default DeleteModal;