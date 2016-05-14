import React, { Component } from 'react'
import ProfileList from '../Components/ProfileList'

class FeaturedProfile extends Component {

	constructor(props, context){
		super(props, context)
		this.displayDescription = this.displayDescription.bind(this)

		this.state = {
			profileInfo: {
				name: '',
				company: '',
				description: ''
			}
		}

	}

	displayDescription(){

	}

	render(){

		return(
			<div className="list-box">
			<h2> Featured Profile </h2>
				<ol>
					<li>description goes here</li>
				</ol>
			</div>
			)
	}
}

export default FeaturedProfile