import React, { Component } from 'react'

class ListItem extends Component {

	render(){
		return (
			<li>{this.props.text.name}, {this.props.text.city}</li>
			)
	}
}

export default ListItem