import { CustomerList } from "../types/common"
import { Branch } from "./branch"
import { Customer } from "./customer"

export class Bank {
    private name: string
    private branches: Branch[]

    constructor(bankName: string) {
        this.name = bankName
        this.branches = []
    }

    addBranch = (branch: Branch): boolean => {
        if(this.branches.includes(branch)){
            return false
        } else{
            this.branches = [...this.branches,branch]
            return true
        }
    }

    addCustomer = (branchName: Branch, customer: Customer): boolean => {
       return branchName.addCustomer(customer)
    }

    addCustomerTransaction = (branchName: Branch, customerId: string, amount: number): boolean => {
        return branchName.addCustomerTransaction(customerId, amount)
    }

    findBranchByName = (branchName: string): string | null => {
        let result: null | string = ''
        this.branches.map((branch: Branch) => {
            let name = branch.getName
            if(name.toLowerCase().includes(branchName) || name === branchName) {
                result = (result) ? result + ',' + name : name
                return result
            }
         })
        return result
    }

    checkBranch = (branchName: Branch): boolean => {
        return this.branches.includes(branchName)
    }

    listCustomers = (branchName: Branch, checkCustomer: boolean): boolean | CustomerList []  => {
        if(branchName) {
            if(!checkCustomer){
                return true
            } else{
              return branchName.getCustomers.map(data => {
                return {
                    name: data.getName,
                    id: data.getId,
                    transaction: JSON.stringify(data.getTransactions)
                }
               })
            }
        } else {
            return false
        }
    }
}