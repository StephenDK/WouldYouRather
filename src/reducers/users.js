// import receive users from actions
import { RECEIVE_USERS } from '../actions/users'

// Users reducer function
export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        default :
            return state
    }
}