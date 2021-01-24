/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
*/

const timeConversion = (string) => {
    // Split the given time into an array of the hours, minutes, and seconds, removing the colon and disregarding the 'AM/PM'(slice(0,8))
    const array = string.slice(0, 8).split(":");
    console.log(array);

    //PM Case
    // if (array[0] == 12) {
    //     array[0] = "12";
    // } else {
    //     array[0] = Number(array[0]) + 12;
    // }

    // AM Case
    // if (array[0] == 12) {
    //     array[0] = "00";
    // }

    array[0] = string.indexOf("PM") > -1 ? (array[0] == 12 ? "12" : Number(array[0]) + 12) : array[0] == 12 ? "00" : array[0];

    // return array.join(":");
    console.log(array.join(":"));
};

timeConversion("07:05:45PM");
