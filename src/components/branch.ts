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
        if (this.customers.includes(customer)) {
            return false
        } else{
            this.customers = [...this.customers, customer]
            return true
        }
    }
    addCustomerTransaction = (customerId: string, amount: number): boolean => {
        let customerName = this.findCustomer(customerId)
        if(customerName) {
            let newCustomerTransaction = new Customer(customerName.getName)
            return newCustomerTransaction.addTransactions(amount)
        }
        return false

    }
    findCustomer = (customerId: string) : Customer | null => {
        let customerdata = this.customers.find(data=> customerId === data.getId)
        return (customerdata === undefined) ? null : customerdata
    }
}