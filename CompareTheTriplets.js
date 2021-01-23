/*
Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.

Function Description

Complete the function compareTriplets in the editor below.

compareTriplets has the following parameter(s):

int a[3]: Alice's challenge rating
int b[3]: Bob's challenge rating
*/

function compareTriplets(a, b) {
    let alicePoints = 0;
    let bobPoints = 0;
    let resultArray = [];

    a.forEach((num1, index) => {
        const num2 = b[index];
        console.log(num1, num2);
        if (num1 > num2) {
            alicePoints += 1;
        }

        if (num2 > num1) {
            bobPoints += 1;
        }

        console.log(alicePoints, bobPoints);
    });
    resultArray.push(alicePoints, bobPoints);
    return resultArray;
}
