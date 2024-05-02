// solution


function gradingStudents(grades) {
    let arr = []
    for (var i = 0; i < grades.length; i++) {
        if (grades[i] >= 38) {
            let rounding = Math.ceil(grades[i] / 5) * 5
            if (rounding - grades[i] < 3) {
                arr.push(rounding)
            }
            else {
                arr.push(grades[i])
            }
        }
        else {
            arr.push(grades[i])
        }
    }
    return arr
}

console.log(gradingStudents([73, 67, 38, 33]))
