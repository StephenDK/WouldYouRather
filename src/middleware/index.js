// import thunk
import thunk from 'redux-thunk'
// import logger
import logger from './logger'
// import redux apply middleware
import { applyMiddleware } from 'redux'

// export middlware with thunk and logger
export default applyMiddleware(thunk, logger)