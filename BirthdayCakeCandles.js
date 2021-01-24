/*
You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Example: candles = [4,4,1,3]


The maximum height candles are 4 units high. There are 2 of them, so return 2.

*/

// MY ANSWER
// const birthdayCakeCandles = (candles) => {
//     candles = candles.sort();
//     let tallestCandle = candles[candles.length - 1];
//     // console.log(tallestCandle);
//     let totalCandles = 0;

//     for (let i = 0; i < candles.length; i++) {
//         if (candles[i] == tallestCandle) {
//             totalCandles += 1;
//         }
//     }
//     console.log(totalCandles);
// };

// FOUND THIS SOLUTION
function birthdayCakeCandles(arr) {
    // Step 1
    // My Notes: Set max and counter to 0
    let max = 0;
    let counter = 0;

    // Step 2 (a)
    // My Notes: loop over each item in the candles array
    arr.forEach((item) => {
        // Step 3
        // My Notes: If the item is bigger than max set max to item and increase counter by 1
        if (item > max) {
            // Step 4
            max = item;
            counter = 1;
            // Step 2 (b)
            // My Notes: Otherwise if item === max increase counter by one
        } else if (item === max) {
            counter++;
        }
    });
    console.log(counter);
    // return counter;
}

birthdayCakeCandles([3, 2, 1, 3, 3]);

// WHAT I SUBMITTED
function birthdayCakeCandles(candles) {
    // candles = candles.sort();
    // let tallestCandle = candles[candles.length - 1];
    // let totalCandles = 0;

    // for (let i = 0; i <= candles.length; i++) {
    //     if (candles[i] == tallestCandle) {
    //         totalCandles += 1;
    //     }
    // }
    // return totalCandles

    // FOUND THIS SOLUTION
    // Step 1
    // My Notes: Set max and counter to 0
    let max = 0;
    let counter = 0;

    // Step 2 (a)
    // My Notes: loop over each item in the candles array
    candles.forEach((item) => {
        // Step 3
        // My Notes: If the item is bigger than max set max to item and increase counter by 1
        if (item > max) {
            // Step 4
            max = item;
            counter = 1;
            // Step 2 (b)
            // My Notes: Otherwise if item === max increase counter by one
        } else if (item === max) {
            counter++;
        }
    });
    console.log(counter);
    return counter;
}
