import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  [{
    "password": "Jhon",
    "username": "jhonmorris"
  }, {
    "password": "Jean",
    "username": "jeanheadly"
  }, {
    "password": "Clarke",
    "username": "clarkechris"
  }];
    
  }

  logginUser(){
  }

}
