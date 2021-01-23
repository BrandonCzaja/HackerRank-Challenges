/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
*/

// function diagonalDifference(arr) {
//     console.log(arr);
//     let top = arr[0];
//     let mid = arr[1];
//     let bottom = arr[2];
//     let result = 0;

//     let lrd = top[0] + mid[1] + bottom[2];
//     let rld = top[2] + mid[1] + bottom[0];

//     result = lrd - rld;
//     return Math.abs(result);
// }

function calculateDiagonals(matrix) {
    var n = matrix.length;
    var diag1 = 0;
    var diag2 = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            // an element from the main diagonal
            if (i === j) {
                diag1 += matrix[i][j];
            }
            // an element from the counterdiagonal
            if (i + j === n - 1) {
                diag2 += matrix[i][j];
            }
        }
    }
    return Math.abs(diag1 - diag2);
}
