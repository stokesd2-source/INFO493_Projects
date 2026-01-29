/**
 * productCheck.js
 * 
 * This program:
 * - Prompts the user for integers until they enter Q or q
 * - Stores valid integers in an array
 * - Echoes each valid integer
 * - Checks if the product of any two numbers equals a third number
 * - Displays appropriate messages
 * - Handles invalid input
 */

const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];

/**
 * Prompts the user for input
 */
function askUser() {
    rl.question("Enter an integer (or Q to quit): ", function (input) {

        // Trim spaces
        input = input.trim();

        // Check for quit option (Q or q)
        if (input.toLowerCase() === "q") {
            rl.close();
            checkCondition();
            return;
        }

        // Try to convert input to number
        let num = Number(input);

        // Check if input is a valid integer
        if (!Number.isInteger(num)) {
            console.log("Error: Please enter a valid integer or Q to quit.");
        } else {
            numbers.push(num);
            console.log("You entered:", num);
        }

        // Ask again
        askUser();
    });
}

/**
 * Checks if any two numbers multiply to a third
 */
function checkCondition() {

    // If fewer than 3 numbers, condition cannot be met
    if (numbers.length < 3) {
        console.log("Not enough numbers entered to check condition.");
        process.exit();
    }

    let found = false;

    // Check all combinations
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            for (let k = 0; k < numbers.length; k++) {

                if (i !== k && j !== k) {

                    if (numbers[i] * numbers[j] === numbers[k]) {
                        console.log(
                            `Condition is met: ${numbers[i]} x ${numbers[j]} = ${numbers[k]}`
                        );
                        found = true;
                        process.exit();
                    }

                }
            }
        }
    }

    // If no match found
    if (!found) {
        console.log("Condition was not met.");
    }

    process.exit();
}

// Start program
console.log("Product Checker Program");
askUser();
