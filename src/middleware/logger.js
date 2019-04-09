// Redux logger helper function 

const logger = store => next => action => {
    console.group(action.type)
    console.log('The action: ', action)
    const returnValue = next(action)
    console.log('The new state: ', store.getState())
    console.groupEnd()
    return returnValue
}

// export logger
export default logger