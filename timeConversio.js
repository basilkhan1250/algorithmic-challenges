// Given a time in -hour AM / PM format, convert it to military(24 - hour) time.

//     Note: - 12:00:00AM on a 12 - hour clock is 00:00:00 on a 24 - hour clock.
// - 12:00:00PM on a 12 - hour clock is 12:00:00 on a 24 - hour clock.

//     Example


// Return '12:01:00'.


//     Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below.It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in hour format
// Returns

// string: the time in hour format
// Input Format

// A single string  that represents a time in -hour clock format(i.e.: or).

//     Constraints

// All input times are valid
// Sample Input 0

// 07:05: 45PM
// Sample Output 0

// 19:05: 45











// Solution




function timeConversion(s) {
    // Write your code here
    let arr = s.split("")
    arr.splice(8, 2)
    console.log(arr)
    if (s.includes("AM")) {
        if (s.includes("12")) {
            // console.log(s)
            arr.splice(0, 1, "0")
            arr.splice(1, 1, "0")
        }
        return arr.join("")
    }
    if (s.includes("12")) {
        if (s.includes("PM")) {
            let arr = s.split("")
            arr.splice(8, 2)
        }
        return arr.join("")
    }
    let real = (Number(arr[0] + arr[1]) + 12).toString()
    let newarr = real.split("")
    arr.splice(0, 1, newarr[0])
    arr.splice(1, 1, newarr[1])
    return arr.join("")
}
