import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  form: any = {
    username: null,
    email: null,
    phone:null,
    password: null,
    address:null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService,private router: Router) { }
  onSubmit() {
    const { username, email,phone, password, address } = this.form;
    console.log(this.form);
    
    this.authService.register(username, email,phone, password, address).subscribe({
      next: (data) => {
        console.log(data);
        alert(JSON.stringify(data.message));
        this.router.navigate(['/login']);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: (err) => {
        if(err){
          alert(JSON.stringify(err.error));}
          else{
            this.router.navigate(['/login']); 
          }
        this.errorMessage = err.message;
        this.isSignUpFailed = true;
      
      },
      
    });
  };
  total: number;
  private addition(a: any,b: any){
    this.total = a+b;
  };
  message: string;
  private setmsg(){
    this.message = 'sample text';
  }
}