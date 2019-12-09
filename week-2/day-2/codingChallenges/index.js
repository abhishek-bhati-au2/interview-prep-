// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"


var multiply = function (num1, num2) {
    let z = [];
    let hold = 0;
    let totalLength = num1.length + num2.length;
    //console.log(totalLength)


    if (num1 === '0' || num2 === '0') {
        return '0';
    }

    if (num1 === '1' || num2 === '1') {
        return num1 === '1'
            ? num2
            : num1;
    }

    num1 = num1.split('').reverse();
    num2 = num2.split('').reverse();

    for (let k = 0; k < totalLength; k++) {
        for (let i = 0; i < num1.length; i++) {
            let j = k - i;
            
            if (num2[j]) {
                hold = hold + (num1[i] * num2[j]);
            }

        }

        if(k === totalLength -1 && hold === 0){
            continue;
        }

        z[k] = hold % 10;
        console.log(z[k])
        hold = Math.trunc(hold / 10);
    }

    return z.reverse().join('');
};
console.log(multiply("40","12"));
