import React from 'react';

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount
    }
  }

  handleIncrementButton = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleDecrementButton = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button
          onClick={this.handleIncrementButton}
          
        >increment</button>
        <button onClick={this.handleDecrementButton}>decrement</button>
      </div >
    )
  }
}

export default Counter;