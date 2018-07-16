import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';
import User from "./User"
import * as HeaderActions from "../../Actions/HeaderActions"

class Header extends React.Component {
    render() {

        const user = this.props.header_reducer.user
        const { GetUser } = this.props.HeaderActions
        return (
            <Navbar fluid={true}>
                <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{ marginBottom: 0 }}>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">СВЭЛ - журналы приложений</a>
                    </div>
                    <div className="nav navbar-nav navbar-right">
                        <User user={user} GetUser={GetUser} />
                    </div>
                </nav>
            </Navbar>
        )
    };
}

function mapStateToProps(state) {
    return {
        header_reducer: state.HeaderReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        HeaderActions: bindActionCreators(HeaderActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
