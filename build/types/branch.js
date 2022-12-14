"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Branch = void 0;
const customer_1 = require("./customer");
class Branch {
    constructor(branchName) {
        this.addCustomer = (customer) => {
            if (this.customers.includes(customer)) {
                return false;
            }
            else {
                this.customers = [...this.customers, customer];
                return true;
            }
        };
        this.addCustomerTransaction = (customerId, amount) => {
            const newCustomerTransaction = new customer_1.Customer(this.name);
            return newCustomerTransaction.addTransaction(amount);
        };
        this.findCustomer = (customerId) => {
            return null;
        };
        this.name = branchName;
        this.customers = [];
    }
    get getName() {
        return this.name;
    }
    get getCustomers() {
        return this.customers;
    }
}
exports.Branch = Branch;
