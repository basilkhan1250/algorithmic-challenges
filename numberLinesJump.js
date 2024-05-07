// // NumberLinesJumps

// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).



// Solution



function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    if (v1 < v2) {
        return "NO"
    }
    if (((x2 - x1) % (v1 - v2) == 0)) {
        return "YES"
    }
    else {
        return "NO"
    }
}