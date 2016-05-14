import React, { Component } from 'react'

class ListItem extends Component {

	render(){
		var content = ""

		if (this.props.text.company == null){
			var color = (this.props.text.city == 'San Francisco') ? 'red' : 'yellow'
				content = <span style={{color:color}}>{this.props.text.name}, {this.props.text.city}</span>
			}

			else {
				content = <span>{this.props.text.name}, {this.props.text.company}</span>
			}

		return (

			<li>{content}</li>
			
			)
	}
}

export default ListItem

