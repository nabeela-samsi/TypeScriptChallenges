import { Entity } from "./common";

export interface Product extends Entity {
/* complete Product interface with some chosen properties */
    title: string
    price: number,
    description: string,
    category: {
        id: number,
        name: string,
        image: string
    },
    images: string[]
}

