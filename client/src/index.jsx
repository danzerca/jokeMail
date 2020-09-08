import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

class App extends React.Component {

  render() {
    return (
      <h1>JokeMail</h1>
    )
  }
};
ReactDOM.render(<App />, document.getElementById('app'));