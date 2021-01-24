/*
Staircase detail

This is a staircase of size n=4:

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size n.
*/

// STRING.PROTOTYPE.REPEAT() ::: MDN: The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

const staircase = (number) => {
    for (let i = 1; i <= number; i++) {
        // print out a " " n-i times and append a # i times
        // console log adds a new line by default

        console.log(" ".repeat(number - i) + "#".repeat(i));
    }
};

staircase(10);
