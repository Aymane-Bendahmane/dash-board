import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {catchError, mapTo, tap} from "rxjs/operators";
import {of} from "rxjs";
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public isLogin: Boolean = false
  private host: string="http://localhost:8080/";

  constructor(private http: HttpClient,public cookieService: CookieService) {

  }

  Login(user: any) {
    const headers = {
      'Content-type': 'application/x-www-form-urlencoded',
    }

    let o = new URLSearchParams()
    o.append('username', user.username)
    o.append('password', user.password)
    return this.http.post(this.host + '/login', o, {headers});

  }

  Logout() {
    sessionStorage.removeItem('refresh-token')
    sessionStorage.removeItem('access-token')
    this.isLogin = false
  }

  private isUserLogin() {
    if (sessionStorage.getItem('refresh-token'))
      this.isLogin = true
  }

  public isUserloged(){
    if( sessionStorage.getItem('refresh-token') && sessionStorage.getItem('access-token') ){
      return true;
    }else return false

  }
  refreshToken(l:any) {
    let headers =
      {
        "Authorization": "Bearer " + l
      }
    return this.http.get(this.host+'RefreshToken', {headers})
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
    let pi = localStorage.getItem("access-token").slice(3).slice(0,-3)
    console.log(pi)
    return pi;
  }
  getRefreshToken(){
    let  ip = localStorage.getItem('refresh-token').slice(3).slice(0,-3)

    if (ip != null){
      return ip
    }
    console.log(ip)
    return null;
  }


}
