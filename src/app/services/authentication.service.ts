import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:5200/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin',{username,password,},httpOptions);
  };
  register(username: string, email: string, phone:number, password: any, address:any): Observable<any> {
    return this.http.post(AUTH_API + 'signup',{username,email,phone,address,password,},httpOptions);
  };
  edit( username: string, email: any, phone:number, password: any, address:any): Observable<any> {
    return this.http.post(AUTH_API + 'edit',{username,email,phone,password,address,},httpOptions);
  };
  getusers(): Observable<any> {
    return this.http.get(AUTH_API + 'getusers',{});
  };
  profile(username: string): Observable<any> {
    return this.http.post(AUTH_API + 'profile',{});
  }
  password(username:string,password:any):Observable<any> {
    return this.http.post(AUTH_API + 'password',{username,password,});
  };
  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout',{},httpOptions);
  }
}