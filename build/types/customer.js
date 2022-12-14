"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const uuid_1 = require("uuid");
class Customer {
    constructor(customerName) {
        this.addTransaction = (amount) => {
            if (amount < 0) {
                return false;
            }
            else {
                const newTransaction = {
                    amount,
                    date: new Date()
                };
                this.transactions = [...this.transactions, newTransaction];
                return true;
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
    get getBalance() {
        let result = 0;
        let totalBalance = this.transactions.map(transaction => {
            return result += transaction.amount;
        });
        return totalBalance;
    }
}
exports.Customer = Customer;
