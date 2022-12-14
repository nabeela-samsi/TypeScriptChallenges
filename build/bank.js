"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bank_1 = require("./types/bank");
const branch_1 = require("./types/branch");
const customer_1 = require("./types/customer");
const arizonaBank = new bank_1.Bank("Arizona");
const westBranch = new branch_1.Branch("West Branch");
const sunBranch = new branch_1.Branch("Sun Branch");
const customer1 = new customer_1.Customer("John");
const customer2 = new customer_1.Customer("Anna");
const customer3 = new customer_1.Customer("John");
arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(sunBranch);
arizonaBank.addBranch(westBranch);
// arizonaBank.findBranchByName("bank")
// arizonaBank.findBranchByName("sun")
// arizonaBank.addCustomer(westBranch, customer1)
// arizonaBank.addCustomer(westBranch, customer3)
// arizonaBank.addCustomer(sunBranch, customer1)
// arizonaBank.addCustomer(sunBranch, customer2)
// arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 3000)
// arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 2000)
// arizonaBank.addCustomerTransaction(westBranch, customer2.getId, 3000)
// customer1.addTransactions(-1000)
// console.log(customer1.getBalance())
// console.log(arizonaBank.listCustomers(westBranch, true))
// console.log(arizonaBank.listCustomers(sunBranch,true))
