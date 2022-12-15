# TypeScript Assignment

- Worked on building bank application and fixing the ecommerce application. This is done using TypeScript
- Check the scripts in `package.json` to run the suitable command to get the expected output

## Tech stack

- TypeScript

## Following is the folder structure.
```bash
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── bank.ts
│   ├── classes
│   │   ├── bank.ts
│   │   ├── branch.ts
│   │   └── customer.ts
│   ├── index.ts
│   └── types
│       ├── common.ts
│       ├── ecommerce.ts
│       ├── product.ts
│       └── user.ts
└── tsconfig.json
```

- index.ts file used to perform some basic operations on ecommerce application
- bank.ts file used to perform some basic operations on bank application
- types folder consists of required interfaces for both the application
- classes folder consists of required class for bank application

## Bank application how it works?

1. Class Bank

    - It has one property:
        - name and type is a string

    - The class bank have 5 methods they are listed below:

        - `addBranch()`
            - This function is used to create new bank branch information such that branch name should be unique.
            - It requires one parameter branch name and type is class of Branch type
            - Once the branch is added successfully it will return true, otherwise it will be false which indicates something went wrong or the branch name is not unique.

        - `addCustomer()`
            - This function is used to create new customer within a specific branch of the bank information such that customer name should be unique.
            - It requires two parameters
                - branch name and type is class of Branch type
                - customer name and type is class of Customer type
            - Once the customer is added successfully it will return true, otherwise it will be false which indicates something went wrong or the customer name is not unique.

        - `addCustomerTransaction()`
            - This function is used to create customers transaction information of an existing customer within a specific branch of the bank.
            - It requires three parameters
                - branch name and type is class of Branch type
                - customer id and type is a string.
                -  amount of transaction and type should be positive number.
            - If negative transaction amount is passed it return false and no information of the transaction process is added.
            - Once the customer transaction information is added successfully it will return true.

        - `findBranchByName()`
            - This function is used to search branch names of the specific bank.
            - It requires one parameters
                - branch name and type is string
            - If provided branchname is substring or exact string is passed it will return the list of matched branches, otherwise returns null

        - `checkBranch()`
            - This function is used to check the bank is located in specific branch or no.
            - It requires one parameters
                - branch name and type is class of Branch type
            - If bank is located at specific branch then it returns true, otherwise false.

        - `listCustomers()`
             - This function is used either used to check branch Or to print out the customer details along with transaction history.
            - It requires two parameters
                - branch name and type is class of Branch type
                - getTransactionInfo and type is boolean.
            - If getTransaction is passed as false, then it will return true if branch exists otherwise false.
            - If getTransaction is passed as true then if branch exists it will prints out the customer details along with transaction history. Otherwise it will just resturn false if no branch doesnt exists

2. Class Branch

    - It has one property:
        - name and type is a string

    - The class branch have 5 methods they are listed below:

        - `getName()`
            - no parameter is needed
            - It is a getter used to get the branch name.
            - While calling the function no need to pass the any paranthesis.

        - `getCustomers()`
            - no parameter is needed
            - It is a getter used to get the customer information.
            - While calling the function no need to pass the any paranthesis.

        - `addCustomer()`
            - This function is used to create new customer. This is called from Bank class.
            - It requires one parameter
                - customer name and type is class of Customer type
            - Once the customer is added successfully it will return true, otherwise it will be false which indicates something went wrong or the customer name is not unique.

        - `addCustomerTransaction()`
            - This function is used to create customers transaction information of an existing customer. This is called from Bank class.
            - It requires two parameters
                - customer id and type is a string.
                - amount of transaction and type should be positive number.
            - If negative transaction amount is passed it return false and no information of the transaction process is added.
            - Once the customer transaction information is added successfully it will return true.

        - `findCustomer()`
            - This function is used to search customer using id within specific branch.
            - It requires one parameters
                - customer id and type is string
            - If customer is found using ID then it returns the customer information, otherwise it will return null

3. Class Customer

    - It has one property:
        - name and type is a string

    - The class customer have 5 methods they are listed below:

        - `getName()`
            - no parameter is needed
            - It is a getter used to get the customer name.
            - While calling the function no need to pass the any paranthesis.

        - `getId()`
            - no parameter is needed
            - It is a getter used to get the customer ID.
            - While calling the function no need to pass the any paranthesis.

        - `getTransactions()`
            - no parameter is needed
            - It is a getter used to get the transaction information.
            - While calling the function no need to pass the any paranthesis.

        - `getBalance()`
            - This function is used to get current bank balance of specific customer

        - `addTransaction()`
            - This function is used to create transaction information for a specific customer. This is called from Branch class.
            - It requires one parameter
                - amount and type is number
            - If negative transaction amount is passed it return false and no information of the transaction process is added.
            - Once the customer transaction information is added successfully it will return true.

## E-commerce application how it works?

- This is pretty staright forward, here we are performing following operations:
    - Fetching users and products data using specific API's.
    - Sorting data with respect to ID, the sorting order will be either ascending or descending. The order is selected as per users preference
    - Fetching specific user data by passing email address
    - Fetching specific product data by passing substring of title
    - Inserting user data, such that the id should be unique
