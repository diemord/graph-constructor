import React from 'react';

export default class UserProfile extends React.Component {
	render() {
		return (<h1>User Profile for userId: {this.props.params.userId}</h1>)
	}
}