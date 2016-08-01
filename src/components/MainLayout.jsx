import React from 'react';
import { Link } from 'react-router';
import '../styles/core.scss'
import classes from './MainLayout.scss'

export default class MainLayout extends React.Component {
	render() {
		return (
			<div  className={classes.app}>
				<aside className={classes["main-aside"]}>
  					<div className={classes.logo}></div>
					<ul className={classes.navigation}>
						<li>
							<Link to='/students' className={classes["menu-item"]} activeClassName={classes["menu-item--active"]}>
								Students
							</Link>
						</li>
						<li>
							<Link to='/planner' className={classes["menu-item"]} activeClassName={classes["menu-item--active"]}>
								Lesson plans
							</Link>
						</li>
					</ul>

				</aside>
				<main className={classes.main}>
					{this.props.children}
				</main>
			</div>
		);
	}
}
