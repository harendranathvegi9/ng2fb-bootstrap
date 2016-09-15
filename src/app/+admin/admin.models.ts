export interface Category {
    $key: string;
    name: string;
    description: string;
    dateAdded: Date;
    editing: boolean
}

export interface Product {
    $key: string;
    name: string;
    description: string;
    dateAdded: Date;
    price: number;
    quantity: number;
}