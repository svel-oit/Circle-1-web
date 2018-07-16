import React from 'react';
import { Modal, Button } from 'react-bootstrap';
export default class TableModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: this.props.show,
            app: this.props.app,
            msg: this.props.msg
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
       return (
            <div>
               <Modal bsSize="large" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                       <Modal.Title>{this.state.app}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       <p>{this.state.msg}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}