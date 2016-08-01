import React from 'react';
import { Link } from 'react-router';
import classes from './ListItem.scss'
import store from '../../app/store';


export class ListItem extends React.Component {
    render() {
        const student = this.props.student,
            transform = store.getState().studentsListState.transform;

        return (<div style={{ transform: `translateY(${transform}px)` }}>
            <Link to={`/students/${student.id}`} className={classes.item} key={student.id}><span className={classes.name}> <b className={classes.photo}></b>{student.firstName} {student.lastName}</span> <span  className={classes.grade}>{student.gradeName}</span> <span className={classes.section}>{student.sectionName}</span> <span className={classes.gpa}>{student.gpa}</span> <span  className={classes.rti}>{student.rtiWeekNumber}</span></Link>
        </div>)
    }
}