export function studentsListLoadFailure(reason) {
    return {
        type: "STUDENTS_LIST_FAILURE",
        reason
    }
}
export function studentsListLoadSuccess(students) {
    return {
        type: 'STUDENTS_LIST_SUCCESS',
        students
    }
}
