"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const uuid_1 = require("uuid");
class Customer {
    constructor(customerName) {
        this.getBalance = () => {
            let result = 0;
            this.transactions.map(transaction => {
                return result = result + transaction.amount;
            });
            return result;
        };
        this.addTransactions = (amount) => {
            if (amount > 0) {
                let newTransaction = {
                    amount,
                    date: new Date()
                };
                this.transactions = [...this.transactions, newTransaction];
                return true;
            }
            else {
                return false;
            }
        };
        this.name = customerName;
        this.id = (0, uuid_1.v4)();
        this.transactions = [];
    }
    get getName() {
        return this.name;
    }
    get getId() {
        return this.id;
    }
    get getTransactions() {
        return this.transactions;
    }
}
exports.Customer = Customer;
