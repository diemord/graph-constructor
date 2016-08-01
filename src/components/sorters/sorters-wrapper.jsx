import React from 'react';
import classes from "./sorters-wrapper.scss"
import classesLi from '../students-list/ListItem.scss'
import Sorter from "./sort-by"

export default class Sorters extends React.Component {

	render() {
		return (
			<div className={classes["wrap-sorters"]} >
			 	<Sorter cName={classesLi.name} sortingBy="lastName" text="Name"  />
			 	<Sorter cName={classesLi.grade} sortingBy="gradeName" text="Grade" />
			 	<Sorter cName={classesLi.section} sortingBy="sectionName" text="Section" />
			 	<Sorter cName={classesLi.gpa} sortingBy="gpa" text="Gpa" />
			 	<Sorter cName={classesLi.rti} sortingBy="rtiWeekNumber" text="RTI" />
			</div>
		);
	}
}

