// import combine reducers
import { combineReducers } from 'redux'

// import reducers
import authedUser from './authedUser'
import questions from './questions'
import users from './users'

// import redux loadingBar reducer
import { loadingBarReducer } from 'react-redux-loading'

// combine all reducers using redux combineReducers
export default combineReducers({
    authedUser,
    users,
    questions,
    loadingBar: loadingBarReducer
})