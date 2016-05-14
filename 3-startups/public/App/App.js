import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import StartupList from './components/StartupList'
import ProfileList from './components/ProfileList'
import FeaturedProfile from './components/FeaturedProfile'

class App extends Component {
	render(){
		return (
			<div>
				Hello React
				<StartupList />
				<ProfileList />
				<FeaturedProfile />
			</div>	
			)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))