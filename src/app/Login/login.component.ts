import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: any = {
    username:null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private storageService: StorageService,private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe({
      next: (data) => {
        this.storageService.saveUser(data);
        //localStorage.setItem('token', JSON.stringify(data));
        console.log(data);
        this.router.navigate(['/profile']);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        // this.roles = this.storageService.getUser().roles;
      },
      error: err => {
        if(err){
        alert(JSON.stringify(err.error));}
        else{
          this.router.navigate(['/profile']); 
        }
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }
  reloadPage() {
    window.location.reload();
  }
}
