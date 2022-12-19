/* Do not modify this interface */
export interface Entity{
    id: number
}

export interface Customer {
    name: string,
    id: string,
    transaction: string
}

export interface Transaction {
    amount: number,
    date: Date
}