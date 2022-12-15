"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Branch = void 0;
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
            const customerData = this.findCustomer(customerId);
            return (customerData === null) ? false : customerData.addTransactions(amount);
        };
        this.findCustomer = (customerId) => {
            let customerData = this.customers.find(data => customerId === data.getId);
            return (customerData === undefined) ? null : customerData;
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
