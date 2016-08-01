import React from 'react';
import classes from './StudentsListLayout.scss'
import classesLi from './students-list/ListItem.scss'
import Sorters from './sorters/sorters-wrapper'

export default class StudentsLayout extends React.Component {
	render() {
		return (
			<div className="list">
				<div className={classes["top-panel"]}></div>
				<section className={classes.content}>
					<div style={{width: "60px"}}></div>
					<div className={classes["main-content"]}>
						<header className={classes["header"]}>
							<div className={classes["header-top-side"]}>
								<p className={classes["h-1"]}>RTI Compass</p> 
								<div className={classes.filters}>
									<p className="terms-filter">terms filter|</p> <p className="grade-filter">grade filter</p>
								</div>
							</div>
							<Sorters />
						</header>
						<div className={classes["list-container"]}>
							{this.props.children}
						</div>
					</div>
				</section>
			</div>
		);
	}
}

