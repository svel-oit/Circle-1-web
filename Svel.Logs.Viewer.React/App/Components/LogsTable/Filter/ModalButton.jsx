import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ToggleModal } from '../../../Actions/LogsTableActions';

class ModalComponentButton extends Component {
    render() {        
        const { ToggleModal } = this.props;
        return (<button className="btn btn-default" onClick={ToggleModal}>Фильтр</button>);
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ToggleModal
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(ModalComponentButton);