import React, { Component } from 'react';
// import connect to connect component to redux
import { connect } from 'react-redux'
// import handleinitial data
import handleInitialData from '../actions/shared'

import '../styles/App.css';

// Components


class App extends Component {
  componentWillMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="container">
        Hello World
      </div>
    );
  }
}

export default connect()(App);
