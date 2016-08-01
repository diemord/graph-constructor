import React from 'react';
import store from "../../app/store"
import {sortListByProp} from '../../actions/actions.js';

export default class SortBy extends React.Component {
	constructor() {
		super(...arguments);
		this.trigger = false;
	}
	clickHandler(){
		const students = store.getState().studentsListState.students;
		store.dispatch(sortListByProp(students,this.props.sortingBy, this.trigger))
		this.trigger = !this.trigger;
	}
	render(){
		
		return (<p style={{cursor: "pointer"}} className={this.props.cName} onClick={this.clickHandler.bind(this)}>{this.props.text}</p>)
	}
}
