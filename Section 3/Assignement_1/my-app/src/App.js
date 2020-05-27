import React, { Component } from 'react';
import './App.css';

class UserInput extends Component {
  render() {
    return (
      <input type="text" />
    )
  }
}

const UserOutput = props => {
  return (
    <div>
      <p>Username: {props.userName}</p>
      <p>Paragraph 2</p>
    </div>
  )
}

class App extends Component {
  state = {
    userName: 'alexguimenti'
  }

  render() {
    return (
      <div className="App">
        <div className="puts">
          <UserInput />
          <UserOutput userName={this.state.userName} />
        </div>
      </div>
    );
  }
}

export default App;