import { Entity } from "./common";

export interface User extends Entity{
    /* complete User interface with some chosen properties */
    email: string,
    password: string,
    name: string,
    role: string,
    avatar: string
}
