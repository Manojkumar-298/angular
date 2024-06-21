import { Component } from '@angular/core';
import { AuthService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  form: any = {
    username:null,
    password: null
  };
  isSuccessful: boolean;
  isSignUpFailed: boolean;
  errorMessage: any;
  constructor(private authService: AuthService, private router: Router){}
  onSubmit(){
    const { username, password } = this.form;
    this.router.navigate(['/login']);
    this.authService.password(username, password).subscribe({
      next: () => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.isSignUpFailed = true;
      },
    })
  }
}
