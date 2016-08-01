const initialUserListState = {
    students: []
}

export default (state = initialUserListState, action) => {
    switch (action.type) {
        case 'STUDENTS_LIST_SUCCESS':
            return {
				...state,
                students: action.students
            };

        case 'STUDENTS_LIST_FAILURE':
            console.warn(action.reason)
            return state;

        case 'SORT_LIST':
            return {
                ...state,
                students: action.students
            };

        case 'SET_SCROLL_PARAMS':
            return {
                ...state,
                start: action.start,
                volume: action.volume,
                iterator: action.iterator,
                height: action.height,
                transform: action.transform
            }

        case 'SCROLL':
            var scrollTop = action.element.scrollTop;
            var bounding = parseInt(scrollTop / state.height) - state.volume;
            return {
                ...state,
                start: state.volume + bounding,
                volume: state.volume + bounding + state.iterator,
                transform: (bounding + state.volume) * state.height
            }
        default:
            return state;
    }
}
