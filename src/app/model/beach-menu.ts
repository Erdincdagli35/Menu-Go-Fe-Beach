import { BeachCategory } from "./beach-category";

export interface BeachMenu {
    id : number;
    name: string;
    description: string;
    price: number;
    category: BeachCategory;
}
