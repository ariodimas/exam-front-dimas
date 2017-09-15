import { Component, OnInit } from '@angular/core';
import {APIServiceService} from '../apiservice.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private servis:APIServiceService) { }

  NewUser = {
    "id" : Number,
    "name" : "",
    "email" : "",
    "address" : "",
    "phone" : "",
  }

  ngOnInit() {
  }

  AddUser(){
    this.NewUser["id"]=this.servis.UserList[this.servis.UserList.length-1]["id"]+1;
    this.servis.UserList.push(this.NewUser)
  }
}
