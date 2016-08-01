

export function sortListByProp(students, propName,toggler) {
    return {
        type: 'SORT_LIST',
        students: students.map(item => item).sort(sorter(propName, toggler))

    }
}

export function scroll(element) {
    return {
        type: 'SCROLL',
        element
    };
}

export function setScrollParams(start, volume, height, transform) {
    return {
        type: 'SET_SCROLL_PARAMS',
        iterator: volume,
        start,
        volume,
        height,
        transform
    };
}



function sorter(propName, inc){
    return function(prev, next){
        if (prev[propName] < next[propName]) {
            return inc ? 1 : -1;
        }
        if (prev[propName] > next[propName]) {
            return inc ? -1 : 1;
        }
        return 0;
    }
}