/**
 * Write a program to calculate the total price of your phone purchase.
 * You will keep purchasing phones (hint: loop!) until you run out of money in your bank account.
 * You’ll also buy accessories for each phone as long as your purchase amount is below
 * your mental spending threshold.
 */

const spend_threshold = 200;
const TAX_RATE = 0.08;
var PHONE_PRICE = 99.99;
var acc_price = 9.99;

var bank_balance = 303.91;
var amount = 0;

function calcTax(amount) {
   return amount * TAX_RATE;
}

function formatAmount(amount) {
   return '$ ' + amount.toFixed(2);
}

if (amount > bank_balance) {
   console.log(`you can not do it.`);
}

console.log(`msg`, formatAmount(123.125545));
