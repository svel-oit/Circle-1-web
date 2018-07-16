import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ApplyFilter } from "../../Actions/LogsTableActions"
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Button, Modal } from 'react-bootstrap';
import TablePopupManager from "./TablePopupManager"
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import moment from "moment"
import Filter from "./Filter/Modal"
import { debug } from 'util';


class LogRecordsTable extends Component {
        constructor(props) {
            super(props);
    }

    popupFormatter(cell, row) {
        return (
            <TablePopupManager row={row} />
        );
    }

    dateFormatter(cell, row) {
        return moment(cell).format("DD-MM-YYYY hh:mm")
    }

    render() {
        const options = {
            sizePerPage: 20,
            prePage: 'Previous',
            nextPage: 'Next',
            firstPage: 'First',
            lastPage: 'Last',
            hideSizePerPage: true
        };

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h4>События и ошибки в приложениях</h4>
                            </div>
                            <div className="content">
                                <Filter />
                                <BootstrapTable
                                    data={this.props.logs}
                                    bordered={true}
                                    striped
                                    pagination={true}
                                    options={options}>
                                    <TableHeaderColumn
                                        dataField='id'
                                        isKey
                                        width="50px"
                                        dataSort>
                                        ID
                                    </TableHeaderColumn>
                                    <TableHeaderColumn
                                        dataField='app'
                                        width="15%"
                                        dataSort>
                                       Приложение
                                    </TableHeaderColumn>
                                    <TableHeaderColumn
                                        dataField='level'
                                        width="10%"
                                        dataSort>
                                        Уровень
                                    </TableHeaderColumn>
                                    <TableHeaderColumn
                                        dataField='userName'
                                        width="15%"
                                        dataSort>
                                        Пользователь
                                    </TableHeaderColumn>
                                    <TableHeaderColumn
                                        dataField='hostName'
                                        width="15%"
                                        dataSort>
                                        Хост
                                    </TableHeaderColumn>
                                    <TableHeaderColumn
                                        dataField='dt'
                                        width="30%"
                                        dataFormat={this.dateFormatter}
                                        dataSort>
                                        Дата и время
                                    </TableHeaderColumn>
                                    <TableHeaderColumn width="20%" dataFormat={this.popupFormatter}>Message</TableHeaderColumn>
                                </BootstrapTable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        logs: state.LogsTableReducer.logsWithFilter.logs,
    };
}

export default connect(mapStateToProps)(LogRecordsTable);

    //constructor(props) {
    //    super(props);

    //    this.state = {
    //        data: []
    //    };
    //}

    //componentDidMount() {
    //    fetch(window.location + "api/Logs/GetLogRecords")
    //        .then(response => response.json())
    //        .then(data => this.setState({ data }));
    //}