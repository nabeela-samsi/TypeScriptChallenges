import { Customer } from "./customer"

export class Branch {
    private name: string
    private customers: Customer[]

    constructor(branchName: string) {
        this.name = branchName
        this.customers = []
    }

    get getName(): string {
        return this.name
    }

    get getCustomers(): Customer[] {
        return this.customers
    }

    addCustomer = (customer: Customer): boolean => {
        if (this.customers.some(data => data.getName === customer.getName)) {
            return false
        } else {
            this.customers = [...this.customers, customer]
            return true
        }
    }

    addCustomerTransaction = (customerId: string, amount: number): boolean => {
        const customerData: null | Customer = this.findCustomer(customerId)
        return (customerData === null) ? false : customerData.addTransactions(amount)
    }

    findCustomer = (customerId: string): Customer | null => {
        let customerData: undefined | Customer = this.customers.find(data =>
            customerId === data.getId
        )
        return (customerData === undefined) ? null : customerData
    }
}