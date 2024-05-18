import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green("Welcome to the Currency Converter"));
let currencyExchangeRate = {
    "PKR": 274,
    "USD": 1,
    "EUR": 0.93,
    "SAR": 0.27,
    "AUD": 1.65
};
let userAnswer = await inquirer.prompt([
    {
        name: "fromcurrency",
        type: "list",
        message: chalk.redBright("Select the currency from:"),
        choices: ["PKR", "USD", "EUR", "SAR", "AUD"]
    },
    {
        name: "toCurrency",
        type: "list",
        message: chalk.blueBright("Select the currency to convert to:"),
        choices: ["PKR", "USD", "EUR", "SAR", "AUD"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.gray("Enter the amount to convert: ")
    }
]);
let fromAmount = currencyExchangeRate[userAnswer.fromcurrency];
let toAmount = currencyExchangeRate[userAnswer.toCurrency];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.yellowBright(`Converted Amount : ${convertedAmount}`));
