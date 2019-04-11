// get initial data from api
import { getInitialData } from '../utils/api'

// redux loading bar 
import { showLoading, hideLoading } from 'react-redux-loading'

// action creators
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser'



//  export handle initial data function
export default function handelInitialData(userId) {
    return (dispatch) => {
        dispatch(showLoading())
            return getInitialData()
                .then(({ users, questions }) => {
                    dispatch(setAuthedUser(userId ? userId : null))
                    dispatch(receiveUsers(users))
                    dispatch(receiveQuestions(questions))
                    dispatch(hideLoading())
                })
    }
}