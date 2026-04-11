import { Category } from "./category";

export interface MenuItem {
    id : number;
    name: string;
    description: string;
    price: number;
    category: Category;
  }