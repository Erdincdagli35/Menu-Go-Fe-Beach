import { BeachCategory } from "./beach-category";
import { MenuItemTranslation } from "../model/menu-item-translation.model";

export interface BeachMenu {
    id : number;
    name: string;
    description: string;
    price: number;
    beachCategory: BeachCategory;
    translations: MenuItemTranslation[];
}