import { Customer as CustomerDataType } from "../types/common"
import { Branch } from "./branch"
import { Customer } from "./customer"

export class Bank {
    private name: string
    private branches: Branch[]

    constructor(bankName: string) {
        this.name = bankName
        this.branches = []
    }

    addBranch = (branchName: Branch): boolean => {
        if(this.checkBranch(branchName)){
            return false
        } else{
            this.branches = [...this.branches,branchName]
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
        let result: null | string = null
        this.branches.map((branch: Branch) => {
            let name = branch.getName
            if(name.toLowerCase().includes(branchName) || name === branchName) {
                result = (result) ? result + ', ' + name : name
                return result
            }
         })
        return result
    }

    checkBranch = (branchName: Branch): boolean => {
        return this.branches.some(branch => branch.getName === branchName.getName)
    }

    listCustomers = (branchName: Branch, getTransactionInfo: boolean): boolean | CustomerDataType[]  => {
        if(this.checkBranch(branchName)) {
            if(!getTransactionInfo){
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