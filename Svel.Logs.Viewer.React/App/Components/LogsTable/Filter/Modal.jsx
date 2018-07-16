import React, { Component } from 'react';
import { connect } from 'react-redux';
import ButtonComponent from './ModalButton';
import Modal from 'react-modal';
import { ToggleModal, ApplyFilter } from '../../../Actions/LogsTableActions';
import { bindActionCreators } from 'redux';
import "../../../../wwwroot/styles/ModalOnCenter.css"

class ModalComponentDialog extends Component {
    constructor(props) {
        super(props);

        this.closeModal = this.closeModal.bind(this);
        this.applyFilter = this.applyFilter.bind(this);   
        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            App: this.props.filter.App,
            Level: this.props.filter.Level,
            UserName: this.props.filter.UserName,
            HostName: this.props.filter.HostName
        }
    }

    closeModal() {
        this.props.ToggleModal();
    }

    applyFilter() {
        const filter = {
            App: this.state.App,
            Level: this.state.Level,
            UserName: this.state.UserName,
            HostName: this.state.HostName
        }

        console.log(filter)

        this.props.ApplyFilter(filter)
        this.closeModal() 
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if (value != null) {
            this.setState({
                [name]: value
            });
        }
    }

    render() {
        const { modalStatus } = this.props;
        return (
            <div>
                <ButtonComponent />
                <Modal
                    isOpen={modalStatus}
                    onRequestClose={this.closeModal}
                    className="modal-dialog"
                    ariaHideApp={false}
                    bsSize="small"
                >
                    <div className="container-fluid">
                    <div className="modal-content">
                        <form >
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h4 className="modal-title">Modal title</h4>
                            </div>
                            <div className="modal-body">
                                
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label>Наименование</label>
                                            <input type="text" className="form-control" name="App" value={this.state.App} onChange={this.handleInputChange} />
		                                </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label>Уровень</label>
                                            <input type="text" className="form-control" name="Level" value={this.state.Level} onChange={this.handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label>Пользователь</label>
                                            <input type="text" className="form-control" name="UserName" value={this.state.UserName} onChange={this.handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label>Хост</label>
                                            <input type="text" className="form-control" name="HostName" value={this.state.HostName} onChange={this.handleInputChange} />
                                        </div>
                                    </div>
                                </div>
                            
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.closeModal}>Закрыть</button>
                                <button type="button" className="btn btn-primary" onClick={this.applyFilter}>Применить фильтр</button>
                             </div>
                         </form>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        modalStatus: state.LogsTableReducer.modalState,
        filter: state.LogsTableReducer.logsWithFilter.filter
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ToggleModal, 
        ApplyFilter
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponentDialog);