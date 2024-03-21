import { Category } from "./category";

export class Product{
    _id: string;
    name: string;
    categories: Category[];
    stock: number;
    price: number;
    isActive: boolean;
    createdDate: string;
    imageUrls: any[];
}