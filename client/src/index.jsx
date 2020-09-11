import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Dad from './Dad.jsx';
import Ron from './Ron.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dad: 'Dad joke',
      ron: 'Ron joke'
    };

  }

  render() {
    const curr = this;
    return (
      <div>
        <div>
          <h1>JokeMail</h1>
        </div>
        <Dad joke={curr.state.dad}/>
        <Ron joke={curr.state.ron}/>
      </div>




    )
  }
};
ReactDOM.render(<App />, document.getElementById('app'));