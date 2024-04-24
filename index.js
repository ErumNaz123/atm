import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 2396;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: "please enter your pin",
        type: "number",
    }
]);
if (pinAns.pin === myPin)
    console.log("correct pincode");
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "what do you want",
        type: "list",
        choices: ["check Balance", "withdraw"],
    }
]);
if (operationAns.operation === "check Balance")
    console.log(`your current balance is: ${myBalance} in rupees `);
let amountAns = await inquirer.prompt([
    {
        name: "amount",
        message: "enter your amount",
        type: "number",
    }
]);
if (operationAns.operation === "withdraw")
    console.log(amountAns.amount);
