import React from 'react';
import {PageList} from './page-list.jsx';
import store from '../../app/store';
import classes from './ProvideList.scss'
import {setScrollParams} from '../../actions/actions.js';

export default class ListProvider extends React.Component {
    constructor() {
        super(...arguments);
        this.itemHeight = 50;
        this.containerHeight = document.body.getBoundingClientRect().height * 0.65;
        const start = 0,
            volume = Math.ceil(this.containerHeight / this.itemHeight),
            transform = 0;
            
        store.dispatch(setScrollParams(start, volume, this.itemHeight, transform));
    }

    render() {
        const state = store.getState().studentsListState,
            students = state.students;
        // TODO: use shouldComponentUpdate: increase performance !
        return (<div  style={{ height: `${this.containerHeight}px` }}>
            <PageList className={classes["page-list"]} itemHeight={this.itemHeight}  count={students.length} students={students.slice(state.start, state.volume) }/>
        </div>)
    }
}
