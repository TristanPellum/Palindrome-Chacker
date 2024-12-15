// Starts the palindrome-checking process
function startPalindromeCheck() {
    let continueChecking = true; // Flag to control the loop

    while (continueChecking) {
        const input = prompt("Enter a word or phrase to check if it's a palindrome:");
        if (!input) {
            alert("No input provided. Exiting the checker.");
            break;
        }

        // Cleans the input: removes spaces and converts to lowercase
        const cleanedInput = input.replace(/\s+/g, "").toLowerCase();
        const reversedInput = cleanedInput.split("").reverse().join(""); // Reverses the string

        // Checks if the input is a palindrome
        if (cleanedInput === reversedInput) {
            alert(`Yes, '${input}' is a palindrome!`);
        } else {
            alert(`No, '${input}' is not a palindrome.`);
        }

        // Asks if the user wants to check another word
        continueChecking = confirm("Do you want to check another word?");
    }
}