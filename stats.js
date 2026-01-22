const readline = require("readline");

// Create interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];

// Prompt user for numbers
function askForNumber() {
    rl.question("Enter an integer (or 'q' to quit): ", (input) => {

        // Quit condition
        if (input.toLowerCase() === "q") {
            if (numbers.length === 0) {
                console.log("No numbers were entered.");
            } else {
                calculateResults();
            }
            rl.close();
            return;
        }

        let value = Number(input);

        // Error handling
        if (!Number.isInteger(value)) {
            console.log("Invalid input. Please enter an integer.");
        } else {
            numbers.push(value);
        }

        askForNumber();
    });
}

// Calculate mean and median
function calculateResults() {
    let sum = numbers.reduce((total, num) => total + num, 0);
    let mean = sum / numbers.length;

    let sorted = [...numbers].sort((a, b) => a - b);
    let mid = Math.floor(sorted.length / 2);

    let median =
        sorted.length % 2 === 0
            ? (sorted[mid - 1] + sorted[mid]) / 2
            : sorted[mid];

    console.log("\nResults:");
    console.log("Numbers:", numbers);
    console.log("Mean:", mean);
    console.log("Median:", median);
}

// Start the program
askForNumber();
