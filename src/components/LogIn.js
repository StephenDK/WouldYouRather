import React, { Component } from 'react'
// Connect component to redux
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser'

// import User
import User from './User'

class LogIn extends Component {
    componentWillMount() {
        this.props.dispatch(setAuthedUser(false))
    }


    render() {
        const { userIds, location } = this.props;
        return (
            <div className='vote-container'>
                <h2>Who are you</h2>
                {userIds.map((id => (
                    <div key={id}>
                        {/* User Component */}
                    </div>
                )))}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const users = state.users;
    return {
        userIds: Object.keys(users),
        users
    }
}

export default connect(mapStateToProps)(LogIn)