import { User } from "./User";

export class Commande{
    public id:number;
    public date:Date;
    public total:number;
    public cmdDescription:string;
    user = new User();
}