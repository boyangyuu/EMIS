import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,private router: Router) { }

  login = (credentials) => {
    this.http.post('http://127.0.0.1:3000/auth/login', credentials)
      .subscribe(
        data => {
          localStorage.setItem('token', data['token']);
          this.router.navigate(['/dashboard']);
        },
        error => console.log(error)
      );
  }
  loggedIn = () => {
    return localStorage.getItem('token');
  }
  logout = () => {
    localStorage.removeItem('token');
  }
}