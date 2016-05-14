import React, { Component } from 'react'
import ListItem from '../components/ListItem'

class ProfileList extends Component {

	constructor(props, context){
		super(props, context)
		this.addProfile = this.addProfile.bind(this)
		this.updateProfile = this.updateProfile.bind(this)
		this.selectProfile = this.selectProfile.bind(this)

		this.state = {
			profile: {
				name:'',
				company: ''
			},

			profiles: [
				{id:0, name: 'Josh Bruno', company: 'Hometeam', description: ''},
				{id:1, name: 'Elon Musk', company: 'Tesla', description: ''},
				{id:2, name: 'Steve Wozniack', company: 'Primary Data', description: ''},
				{id:3, name: 'Elizabeth Holmes', company: 'Theranos', description: ''}
			]
		}
	}

	addProfile(){
		event.preventDefault()
		console.log('addProfile: '+JSON.stringify(this.state.profile))
		var updatedProfile = Object.assign([], this.state.profiles)
		updatedProfile.push(this.state.profile)

		this.setState({
			profiles: updatedProfile
		})
	}

	updateProfile(event){
		console.log('updateProfile: '+event.target.id+' == '+event.target.value)
		
		var updatedProfile = Object.assign({}, this.state.profile)
		updatedProfile[event.target.id] = event.target.value
		this.setState({
			profile: updatedProfile
		})
	}

	selectProfile(profileId){
		console.log('selectProfile: '+profileId)
	}

	render(){
		var _this = this
		var profileList = this.state.profiles.map(function(profile, i){
			return <ListItem key={i} text={profile} click={_this.selectProfile} />
		})

		return (

			<div className = "list-box">
				<ol>
					{profileList}
				</ol>
				<h2> Add Profile</h2>
				<input id="name" onChange={this.updateProfile} type="text" placeholder="Name" /><br/>
				<input id="company" onChange={this.updateProfile} type="text" placeholder="Company" /><br/>
				<a onClick={this.addProfile} href='#'>Add Employees</a>
			</div>
			)
	}
} 

export default ProfileList