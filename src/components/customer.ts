import { Transaction } from "./transaction";
import { v4 as uuid } from "uuid"

export class Customer {
    private name: string
    private id: string
    private transactions: Transaction[]

    constructor(customerName: string) {
        this.name = customerName
        this.id = uuid()
        this.transactions = []
    }

    get getName(): string {
        return this.name
    }

    get getId(): string {
        return this.id
    }

    get getTransactions() {
        return this.transactions
    }

    getBalance = (): number => {
        let result: number = 0;
        let totalBalance = this.transactions.map(transaction => {
            return result += transaction.amount
        })
        return result
    }

    addTransactions = (amount: number): boolean => {
        if (amount < 0) {
           return false
        } else {
            let newTransaction ={
                amount,
                date: new Date()
            }
            this.transactions = [...this.transactions, newTransaction]
            return true
        }
    }
}