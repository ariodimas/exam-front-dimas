import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class APIServiceService {

  constructor(private http:Http) { }

  UserList : object[] = [];

  GetAllUser(){
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        result => {
         for (var i = 0; i < result.json().length; i++) {
            var e = result.json()[i];
            var UserObj = {
              "id" : e.id,
              "name" : e.name,
              "email" : e.email,
              "address" : e.address.street,
              "company" : e.company.name,
            };
          this.UserList.push(UserObj); 
          }
          // result.json().forEach(e => {
          //   this.UserList.push({
          //     "name" : e.name,
          //     "email" : e.email,
          //     "address" : e.address,
          //     "phone" : e.phone
          //   });
          // });
        },
        error=>{}
      );
  }

  RemoveData(id){
    for (var i = 0; i < this.UserList.length; i++) {
      if(this.UserList[i]["id"] == id){
        this.UserList.splice(i,1);
        break;
      }
      
    }
  }

}
