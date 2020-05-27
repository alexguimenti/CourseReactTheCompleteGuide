import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Alex', age: 30 },
      { name: 'Vic', age: 31 },
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Alex', age: 30 },
        { name: 'Vic', age: 31 },
      ],
    })
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: event.target.value, age: 30 },
        { name: 'Vic', age: 31 },
      ],
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
        onClick={() => this.switchNameHandler('Maximilian!!')}
        style={style}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler}>My hobby is Run
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;

