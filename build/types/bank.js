"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
const branch_1 = require("./branch");
class Bank {
    constructor(bankName) {
        this.addBranch = (branch) => {
            if (this.branches.includes(branch)) {
                return false;
            }
            else {
                this.branches = [...this.branches, branch];
                console.log(this.branches);
                return true;
            }
        };
        this.addCustomer = (branchName, customer) => {
            const newCustomer = new branch_1.Branch(branchName);
            return newCustomer.addCustomer(customer);
        };
        this.addCustomerTransaction = (branch, customerId, amount) => {
            const newCustomerTransaction = new branch_1.Branch(branch);
            return newCustomerTransaction.addCustomerTransaction(customerId, amount);
        };
        this.findBranchByName = (branchName) => {
            this.branches.map((branch) => {
                // if(branchName === branch.name)
            });
            return "true";
        };
        this.checkBranch = (branch) => {
            return true;
        };
        this.listCustomers = (branch, checkCustomer) => {
            return true;
        };
        this.name = bankName;
        this.branches = [];
    }
}
exports.Bank = Bank;
