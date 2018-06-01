import React, { Component } from 'react'

class SearchInput extends Component {
	constructor(props){
		super(props);

		this.state = 
		{
			fieldVal: ""
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({fieldVal: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log(this.state.fieldVal)
		this.props.onSubmission(this.state.fieldVal)
	}

	render(){

		return(

			<form onSubmit={this.handleSubmit}>
				<label>
					IP Address:
					<input 
					type="text" 
					placeholder="Enter IP to search here..." 
					onChange={this.handleChange} 
					value={this.state.fieldVal} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default SearchInput;
