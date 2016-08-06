import React from 'react';

import StudentsList from './students-list/provide-list';
import load from '../app/loader.js';
import { connect } from 'react-redux';
import store from '../app/store';
import LoadingScreen from './loading-screen';

import classes from './StudentsListContainer.scss'

import {studentsListLoadFailure, studentsListLoadSuccess} from '../actions/list-loading-actions.js';


class StudentsListContainer extends React.Component {
	constructor() {
		super(...arguments);
		if (!this.props.students.length) {
			load("http://rti-gradebook.dev.architech.nyc:3000/api/students/list")
				.then((response) => {
					return JSON.parse(response);
				}).then((response) => {
					store.dispatch(studentsListLoadSuccess(response.data.students));
				}).catch((reason) => {
					store.dispatch(studentsListLoadFailure(reason));
				});
		} else {
			store.dispatch(studentsListLoadSuccess(this.props.students));
		}
	}

	render() {
		return (<div className={classes.wrapper}>
					<div className={classes.list}>
					</div>
			</div>)
	}
};

const mapStateToProps = function (store) {
	return {
		students: store.studentsListState.students
	};
}

export default connect(mapStateToProps)(StudentsListContainer);