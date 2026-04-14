import { BeachCategory } from "./beach-category";

export interface BeachMenuResponse {
  id: number;
  name: string;
  description: string;
  price: number;
  category: BeachCategory;
}