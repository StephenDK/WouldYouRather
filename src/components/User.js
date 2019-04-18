import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'
import { testAuth } from '../utils/api'


class User extends Component {
    state = {
        redirectToReferrer: false
    }

    handleLogin = id => {
        const { dispatch } = this.props;

        testAuth.authenticate(() => {
            dispatch(setAuthedUser(id))
            this.setState({
                redirectToReferrer: true
            })
        })
    }


    render() {
        const { from } = this.props.location.state || {
            from: { pathname: '/home' }
        }
        return (
            <div>

            </div>
        )
    }
}

export default User