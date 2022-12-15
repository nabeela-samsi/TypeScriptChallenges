import { v4 as uuid } from "uuid"
import { Transaction } from "../types/common"

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

    get getTransactions(): Transaction[] {
        return this.transactions
    }

    getBalance = (): number => {
        let result: number = 0;
        this.transactions.map(transaction => {
            return result = result + transaction.amount
        })
        return result
    }

    addTransactions = (amount: number): boolean => {
        if (amount > 0) {
            let newTransaction: Transaction ={
                amount,
                date: new Date()
            }
            this.transactions = [...this.transactions, newTransaction]
            return true
        } else {
           return false
        }
    }
}