import React, { Component } from 'react'
import ListItem from '../components/ListItem'

class StartupList extends Component {

	constructor(props, context){
		super(props, context)
		this.addStartup = this.addStartup.bind(this)
		this.updateStartup = this.updateStartup.bind(this)

		this.state = {

			startup: {
				name:'',
				city:''
			},

			startups: [
				{name: 'Hometeam', city: 'New York'},
				{name: 'Pager', city: 'New York'},
				{name: 'PresenceLearning', city: 'San Francisco'},
				{name: 'Bright Health', city: 'Minneapolis'}
			]
		}
	}

	addStartup(){
		event.preventDefault()
		console.log('addStartup: '+JSON.stringify(this.state.startup))
		var updatedStartups = Object.assign([], this.state.startups)
		updatedStartups.push(this.state.startup)

		this.setState({
			startups: updatedStartups
		})
	}

	updateStartup(event){
		console.log('updateStartup: '+event.target.id+' == '+event.target.value)

		var updatedStartup = Object.assign({}, this.state.startup)
		updatedStartup[event.target.id] = event.target.value
		this.setState({
			startup: updatedStartup
		})
	}

	render(){

		var list = this.state.startups.map(function(startup, i){
			return <ListItem key={i} text={startup} />
		})

		return (
			<div className="list-box">
				<ol>
					{list}
				</ol>
				<h2> Add Startup</h2>
				<input id="name" onChange={this.updateStartup} type="text" placeholder="Name" /><br />
				<input id="city" onChange={this.updateStartup} type="text" placeholder="City" /><br />
				<a onClick={this.addStartup} href="#">Add</a>
			</div>	
			)
	}
}

export default StartupList