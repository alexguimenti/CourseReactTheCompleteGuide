import React, { Component } from 'react';
import './App.css';
import UserOutput from './components/UserOutput'
import UserInput from './components/UserInput'
import Counter from './components/Counter'

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			userName: "alexguimenti"
		}
	}

	updateUserNameHandler = (event) => {
		this.setState({
			userName: event.target.value
		})
	}

	render() {

		


		return (
			<div className="App">
				<div className="puts">
					<UserInput
						userName={this.state.userName}
						changed={this.updateUserNameHandler} />
					<UserOutput
						userName={this.state.userName}
					/>
					<br />
					<br />
					<br />
					<br />
					<Counter initialCount={0} />
					<Counter initialCount={5} />
				</div>
			</div>
		);
	}
}

export default App;