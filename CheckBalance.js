/*
 * Checking Your Balance
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 0; //account balance
var checkBalance = true; //if you want to check balance
var isActive = true; //if account is active

// your code goes here
//console.log('Do you want to check your balance?');
if (checkBalance) {
    if (isActive && balance > 0) {
        console.log(`Your balance is $${balance}.`);
    } else if (!isActive) {
        console.log("Your account is no longer active.");
    } else if (balance === 0) {
        console.log("Your account is empty.");
    } else {
        console.log("Your balance is negative. Please contact bank.");
    }
} else {
    console.log("Thank you. Have a nice day!");
}
