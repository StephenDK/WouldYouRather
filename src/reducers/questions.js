// import action type from actions
import { RECEIVE_QUESTIONS } from '../actions/questions'

// questions reducer
export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions
            }
        default :
            return state
    }
}