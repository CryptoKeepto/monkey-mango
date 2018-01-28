import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import "rxjs/add/operator/map";

@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient, @Inject("API_URL") private url: string) { }

  public doLogin(username: string, password: string) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({ "Content-Type": "application/json" });
      let body = {
        "username": username,
        "password": password
      }
      this.http.post(`${this.url}/users/login`, body, { headers: headers })
        .map(e => e)
        .subscribe(
        res => resolve(res),
        err => reject(err)
        )
    })
  }



}
