import React, { Component } from 'react';
import './App.css';

class MyButton extends Component {
  render() {
    return (
      <button onClick={() => { this.props.handleClick(this.props.label) }}>{this.props.label}</button>
    )
  }
}

class MyLabel extends Component {
  render() {
    return (
      <p>{this.props.text} foi clicado!</p>

    )
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelText: '',
    }
  }

  setLabelText = (labelText) => {
    this.setState({ labelText })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <MyLabel text={this.state.labelText} />
        <MyButton label="Click Me! " handleClick={this.setLabelText} />
        <MyButton label="Again! " handleClick={this.setLabelText} />
      </div>
    );
  }
}

export default App;
