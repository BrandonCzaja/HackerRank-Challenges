/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
*/

function diagonalDifference(arr) {
    console.log(arr);
    let top = arr[0];
    let mid = arr[1];
    let bottom = arr[2];
    let result = 0;

    let lrd = top[0] + mid[1] + bottom[2];
    let rld = top[2] + mid[1] + bottom[0];

    result = lrd - rld;
    return Math.abs(result);
}
