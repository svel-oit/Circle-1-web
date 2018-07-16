import React, { PropTypes, Component } from 'react'

export default class User extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.GetUser();
    }

    render() {
        return (
            <div>
                <span className="navbar-text">{this.props.user.fullName}</span>
            </div>
        )
    }
}

