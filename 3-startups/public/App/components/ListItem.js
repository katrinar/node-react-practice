import React, { Component } from 'react'

class ListItem extends Component {

	constructor(props, context){
		super(props, context)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		console.log('handleClick: '+JSON.stringify(this.props.text.name))
		this.props.click(this.props.text.id)
	}

	render(){
		var content = ""

		if (this.props.text.company == null){
			var color = (this.props.text.city == 'San Francisco') ? 'red' : 'black'
				content = <span onClick={this.handleClick} style={{color:color}}>{this.props.text.name}, {this.props.text.city}</span>
			}

			else {
				content = <span onClick={this.handleClick} >{this.props.text.name}, {this.props.text.company}</span>
			}

		return (
			<li>{content}</li>
			)
	}
}

export default ListItem

