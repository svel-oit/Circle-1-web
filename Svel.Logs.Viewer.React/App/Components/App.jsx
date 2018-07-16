import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header';
import LogRecordsTable from './LogsTable/LogsTable';

export default class App extends React.Component {
    render() {
        return (
            <div id="wrapper">
                <div className="main-panel">
                    <Header />
                    <LogRecordsTable />
                </div>
            </div>
        );
    }
};

