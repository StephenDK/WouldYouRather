import React from 'react';
import ReactDOM from 'react-dom';
// import createStore from redux
import { createStore } from 'redux'
// import the Provider from react-redux
import { Provider } from 'react-redux'
// import reducers
import reducer from './reducers'
// import middleware
import middleware from './middleware'

import './index.css';
import App from './components/App';

// create redux store
const store = createStore(reducer, middleware)

// wrap <App /> with the provider passing in the store
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root'));

