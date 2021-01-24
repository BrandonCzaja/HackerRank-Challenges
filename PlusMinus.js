/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4  are acceptable.
*/

const plusMinus = (array) => {
    let numberOfPositives = 0;
    let numberOfNegatives = 0;
    let numberOfZeros = 0;

    let positiveRatio = 0;
    let negativeRatio = 0;
    let zeroRatio = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            numberOfPositives += 1;
        } else if (array[i] < 0) {
            numberOfNegatives += 1;
        } else {
            numberOfZeros += 1;
        }
    }
    // console.log(numberOfPositives);
    // console.log(numberOfNegatives);
    // console.log(numberOfZeros);

    positiveRatio = numberOfPositives / array.length;
    negativeRatio = numberOfNegatives / array.length;
    zeroRatio = numberOfZeros / array.length;
    console.log(Number.parseFloat(positiveRatio).toFixed(6));
    console.log(Number.parseFloat(negativeRatio).toFixed(6));
    console.log(Number.parseFloat(zeroRatio).toFixed(6));
};

plusMinus([1, 1, 0, -1, -1]);
