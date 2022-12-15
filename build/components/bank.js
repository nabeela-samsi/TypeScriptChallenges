"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
class Bank {
    constructor(bankName) {
        this.addBranch = (branch) => {
            if (this.branches.includes(branch)) {
                return false;
            }
            else {
                this.branches = [...this.branches, branch];
                return true;
            }
        };
        this.addCustomer = (branchName, customer) => {
            return branchName.addCustomer(customer);
        };
        this.addCustomerTransaction = (branchName, customerId, amount) => {
            return branchName.addCustomerTransaction(customerId, amount);
        };
        this.findBranchByName = (branchName) => {
            let result = '';
            this.branches.map((branch) => {
                let name = branch.getName;
                if (name.toLowerCase().includes(branchName) || name === branchName) {
                    result = (result) ? result + ',' + name : name;
                    return result;
                }
            });
            return result;
        };
        this.checkBranch = (branchName) => {
            return this.branches.includes(branchName);
        };
        this.listCustomers = (branchName, checkCustomer) => {
            if (branchName) {
                if (!checkCustomer) {
                    return true;
                }
                else {
                    return branchName.getCustomers.map(data => {
                        return {
                            name: data.getName,
                            id: data.getId,
                            transaction: JSON.stringify(data.getTransactions)
                        };
                    });
                }
            }
            else {
                return false;
            }
        };
        this.name = bankName;
        this.branches = [];
    }
}
exports.Bank = Bank;
