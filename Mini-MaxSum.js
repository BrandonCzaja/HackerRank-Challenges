/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

*/

const minMaxSum = (array) => {
    array = array.sort();
    // console.log(array);
    let minimum = 0;
    let maximum = 0;

    for (let i = 0; i < array.length - 1; i++) {
        minimum += array[i];
    }

    for (let i = array.length - 1; i > 0; i--) {
        maximum += array[i];
    }
    // console.log(minimum);
    // console.log(maximum);
    console.log(`${minimum} ${maximum}`);
};

minMaxSum([1, 4, 8, 5, 2]);
