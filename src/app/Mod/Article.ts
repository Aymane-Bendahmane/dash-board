import { Category } from "./Category";

export class Article{
  public id:number;
  public designation:string;
  public prix:number;
  public qtstock:number;
  public description:string;
  public photo:string;
  
  category = new Category();
}