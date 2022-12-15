import { Bank } from "./components/bank"
import { Branch } from "./components/branch"
import { Customer } from "./components/customer"


const arizonaBank = new Bank("Arizona")
const stateBank = new Bank("State")
const westBranch = new Branch("West Branch")
const sunBranch = new Branch("Sun Branch")
const customer1 = new Customer("John")
const customer2 = new Customer("Anna")
const customer3 = new Customer("John")

console.log(arizonaBank.addBranch(westBranch))
console.log(arizonaBank.addBranch(sunBranch))
console.log(arizonaBank.addBranch(westBranch))

console.log(arizonaBank.findBranchByName("bank"))
console.log(arizonaBank.findBranchByName("sun"))

console.log(arizonaBank.addCustomer(westBranch, customer1))
console.log(arizonaBank.addCustomer(westBranch, customer3))
console.log(arizonaBank.addCustomer(sunBranch, customer1))
console.log(arizonaBank.addCustomer(sunBranch, customer2))

console.log(arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 3000))
console.log(arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 2000))
console.log(arizonaBank.addCustomerTransaction(westBranch, customer2.getId, 3000))

console.log(customer1.addTransactions(-1000))
console.log(customer1.getBalance())
console.log(arizonaBank.listCustomers(westBranch, true))
console.log(arizonaBank.listCustomers(sunBranch,true))

console.log(arizonaBank.checkBranch(westBranch))
console.log(stateBank.checkBranch(westBranch))

console.log(westBranch.findCustomer(customer1.getId))