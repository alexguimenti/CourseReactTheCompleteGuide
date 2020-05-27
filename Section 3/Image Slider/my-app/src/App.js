import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageSlider from './Components/ImageSlider'

class App extends React.Component {

  state = {
    visible: true
  }
  render() {

    const buttonText = this.state.visible ? 'hide' : 'show';
    const slider = this.state.visible ? <ImageSlider /> : null

    return (
      <div className="App">
        {slider}
        <button onClick={() => {
          this.setState({ visible: !this.state.visible })
        }}>{buttonText}</button>
      </div>
    );
  }
}

export default App;
