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

export const testAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100)
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100)
    }
  }
  
  