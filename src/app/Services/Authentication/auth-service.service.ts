import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {catchError, mapTo, tap} from "rxjs/operators";
import {of} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public isLogin: Boolean = false
  public host:string='http://localhost:8080'
  constructor(private http: HttpClient,private rt:Router) {
  }


  Logout() {
    localStorage.removeItem('refresh-token')
    localStorage.removeItem('access-token')
    this.isLogin = false
  }

  private isUserLogin() {
    if (localStorage.getItem('refresh-token'))
      this.isLogin = true
  }

  public isUserloged(){
    if( localStorage.getItem('refresh-token') && localStorage.getItem('access-token') ){
      return true;
    }else return false

  }
  refreshToken(l:any) {
    let headers =
      {
        "Authorization": "Bearer " + l
      }
    return this.http.get(this.host+'/RefreshToken', {headers})
    /*.subscribe( data =>{
    // @ts-ignore
    let ref = data['refresh-token']
    // @ts-ignore
    let acc  = data['access-token']
    localStorage.setItem('refresh-token',JSON.stringify(ref))
    localStorage.setItem('access-token',JSON.stringify(acc))
  },error => {
    console.log(error)
  })*/
  }

  getAccessToken(){
    let  acc:string | null = localStorage.getItem('access-token')
    return (JSON.parse(<string>acc))
  }
  getRefreshToken(){
    let  acc = localStorage.getItem('refresh-token')

    if (acc != null){
      return (JSON.parse(<string>acc))
      console.log('see me :' + acc)
    }

    return null;
  }
  isAdmin(roles:any){
    console.log(roles)
    for (let role of roles) {
      if(role['role'] == 'ADMIN'){
        // @ts-ignore
        window.location.href='http://localhost:4201?access='+this.getAccessToken()+'&refresh='+this.getRefreshToken() ;
      }

    }
    console.log('not admin')
    return null;
  }

}
