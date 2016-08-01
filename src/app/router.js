import React, { PropTypes } from 'react';
import { Router, Route, IndexRedirect, Redirect, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

// Layouts
import MainLayout from '../components/MainLayout';
import StudentsListLayout from '../components/StudentsListLayout';

// Pages
import Home from '../components/home';
import StudentsListContainer from '../components/StudentsListContainer';
import UserProfile from '../components/students-profile';
import PlannerLayout from '../components/planner-layout';
import Planner from '../components/planner';

export default class RouterContainer extends React.Component {
		render () {
			return (
					<div style={{ height: '95vh' }}>
						<Router history={browserHistory}>
						<Route component={MainLayout}>
							<Redirect from="/" to="students" />
							<Route path="students">
								<Route component={StudentsListLayout}>
									<IndexRoute component={StudentsListContainer} />
								</Route>
								<Route path=":userId" component={UserProfile} />
							</Route>

							<Route path="planner">
								<Route component={PlannerLayout}>
									<IndexRoute component={Planner} />
								</Route>
							</Route>

						</Route>
					</Router>
				</div>
			)
		}
	}