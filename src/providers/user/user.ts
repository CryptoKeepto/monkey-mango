import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";

@Injectable()
export class UserProvider {

  private url: string = "https://jsonplaceholder.typicode.com/users";

  constructor(public http: HttpClient) {}

  public getUsers() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url)
        .map(e => e)
        .subscribe(
          res => resolve(res),
          err => reject(err)
        )
    })

  }

}
