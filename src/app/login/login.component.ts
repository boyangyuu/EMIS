import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { AuthService } from '../shared/auth.service';

interface Credentials { username: string, password: string }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  
  credentials: Credentials;
  constructor( private auth: AuthService ) {}

  ngOnInit() {
  }
  
  onLogin(credentials) {
    if(credentials.username && credentials.password){
      this.auth.login(credentials); 
    }
  }

}
