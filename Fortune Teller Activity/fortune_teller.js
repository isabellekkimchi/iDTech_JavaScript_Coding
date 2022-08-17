// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
// YOUR CODE GOES HERE
function fortuneTell(number) {
    console.log(`Fortune Selected: ${number}`)
    if (number >= 0 && number <= 3) {
        console.log('Too bad, you have a low fortune')
    } else if (number > 3 && number <= 7) {
        console.log('Okay, you have an average fortune.')
    } else if (number > 7 && number <= 10) {
        console.log('Wow! You have a great fortune!')
    } else {
        console.log('Please input a valid number, more specifically a number 1-10')
    }
}

// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.

// YOUR CODE GOES HERE
fortuneTell(7)