import React, { Component } from 'react'
// connect component to store
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className='toggle-catagory'>
                    <select onChange={this.handleToggleCategory}>
                        <option value='Unanswered Questions'>Unanswered Questions</option>
                        <option value='Answered Questions'>Answered Questions</option>
                    </select>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { users, questions } = state
    return {
        users,
        questions,
        answeredQuestions: fetchAnsweredQuestions(),
        unansweredQuestions: fetchUnansweredQuestions()
    }
}


export default connect(mapStateToProps)(Dashboard)