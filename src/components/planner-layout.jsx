import React from 'react';

export default class PlannerLayout extends React.Component {
	render() {
		return (
			<div>
				<header className="header">
					<p>Plans</p>
				</header>
				<div className="search-results">
					{this.props.children}
				</div>
			</div>
		);
	}
}

