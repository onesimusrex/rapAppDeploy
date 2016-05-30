import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {

	render(){
		return (
			<div>
				<h1>This is a REACT Component!</h1>
			</div>
		)
	}

}

ReactDOM.render(<App />, document.getElementById('app'))