import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import { Marque } from '../Mod/Marque';
import {AuthServiceService} from '../Services/Authentication/auth-service.service';
import {User} from '../Mod/User';
import {Article} from '../Mod/Article';
import {Commande} from '../Mod/Commande';
import {Category} from '../Mod/Category';
import {catchError} from 'rxjs/operators';
import {error} from 'highcharts';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  public host:string="http://localhost:8080";
  constructor(private httpClient:HttpClient,public auth:AuthServiceService) { }

  uploadPhoto(file: File, id) {
    let formdata: FormData = new FormData();

    formdata.append('file', file);


    return this.httpClient.post(this.host + '/uploadPhoto/' + id,formdata);
  }


  public getCateg(){
    return this.httpClient.get(this.host+"/categ");
  }
  saveCategory(cat: Category) {

    return this.httpClient.post(this.host + '/addCat', cat);
    // @ts-ignore
  }
  getCatbyId(id: number) {
    return this.httpClient.get(this.host + '/categ/' + id);

  }
  onUpdateCat(cat: Category) {
    return this.httpClient.put(this.host + '/editCateg/' + cat.id, cat);
  }
  getarticlebyid(id: number) {
    return this.httpClient.get(this.host + '/article/' + id);

  }
  onUpdateArticle(cat: Article) {
    return this.httpClient.patch(this.host + '/editArticle/' + cat.id, cat);
  }
//     Markl
  public getmarks(){
    /* let pi = localStorage.getItem("access-token").slice(3).slice(0,-3)
     console.log(pi)
     let headers =
       {
         "Authorization": "Bearer " + pi
       }*/

    return this.httpClient.get(this.host+"/marks");
  }
  saveMarque(marque: Marque) {

    return this.httpClient.post(this.host + '/addMarque', marque);
    // @ts-ignore
  }
  getMarkByid(id: number) {
    return this.httpClient.get(this.host + '/marks/' + id);

  }
  onUpdateMark(mark: Marque) {
    return this.httpClient.put(this.host + '/editMark/' + mark.id, mark);
  }
  deleteMrk(id): Observable<void> {
    return this.httpClient.delete<void>(this.host + "/Dmark/" + id)
  }
  handleError(error: Response,id) {

    if (error.status == 403) {

      this.deleteMrkandArticle(id)
    } else {

      return Observable.throw(error);

    }

  }
  deleteMrkandArticle(id): Observable<void> {
    return this.httpClient.delete<void>(this.host + "/DmarkA/" + id);
  }
  //------------------------------------------------User services-----------------------------------------------

  public getusers(){
    return this.httpClient.get(this.host+"/users");
  }
  saveUser(user: User) {
    return this.httpClient.post(this.host + '/addUser', user);
    // @ts-ignore


  }
  getUserByid(idU: number) {
    return this.httpClient.get(this.host + '/users/' + idU);

  }
  deleteUser(id:number): Observable<void> {
    return this.httpClient.delete<void>(this.host + "/Dusers/" + id);
  }
  updateUser(user: User) {
    return this.httpClient.patch(this.host + '/editUser/' + user.idU, user);
  }

  //--------------------------------------------- Article services
  public getProducts(){
    return this.httpClient.get(this.host+"/products");
  }
  saveArticle(arti: Article) {
    return this.httpClient.post(this.host + '/addProd', arti);
    // @ts-ignore


  }
  //-------------------------------------------------commande services
  public getCommands(){
    return this.httpClient.get(this.host+"/commandess");
  }
  public deleteCommande(id:number){
    return this.httpClient.delete(this.host+"/Dcommande/"+id);
  }
  public DeleteCategorie(id:number){
    return this.httpClient.delete(this.host+"/Dcateg/"+id);
  }
  public DeleteArticle(id:number){
    return this.httpClient.delete(this.host+"/Darticles/"+id);
  }
  saveCmd(cmd: Commande) {
    return this.httpClient.post(this.host + '/addCmd', cmd);
    // @ts-ignore


  }

  getRoles() {
    return this.httpClient.get(this.host+"/roless");
  }
}

