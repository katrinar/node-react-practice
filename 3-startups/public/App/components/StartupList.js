import React, { Component } from 'react'
import ListItem from '../components/ListItem'

class StartupList extends Component {

	constructor(props, context){
		super(props, context)

		this.state = {
			startups: [
				{name: 'Hometeam', city: 'New York'},
				{name: 'Pager', city: 'New York'},
				{name: 'PresenceLearning', city: 'San Francisco'},
				{name: 'Bright Health', city: 'Minneapolis'}
			]
		}
	}

	render(){

		var list = this.state.startups.map(function(startup, i){
			return <ListItem key={i} text={startup} />
		})

		return (
			<ol>
				{list}
			</ol>
			)
	}
}

export default StartupList