import React from 'react';
import {ListItem} from './ListItem';
import {scroll} from '../../actions/actions.js';
import classes from './PageList.scss'
import store from '../../app/store';

export class PageList extends React.Component {

    render() {
        const students = this.props.students,
            count = this.props.count,
            itemHeight = this.props.itemHeight,
            height = count * itemHeight;

        return (
            <div className={classes.list} onScroll={(event) => store.dispatch(scroll(event.target)) }>
                <div className={classes.scroll}  style={{ height: `${height}px` }}/> {
                    students.map((item, index) => {
                        return <ListItem key={index} student={item}/>
                    })
                }
            </div>)
    }
}