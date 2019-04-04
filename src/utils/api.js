// import getQuestions and users from _DATA.js
import { _getQuestions, _getUsers } from './_DATA'

// get the initial data function 
export function getInitialData() {
    return Promise.all([_getUsers(), _getQuestions()])
        .then(([users, questions]) => ({
            users,
            questions
        })
    )
}