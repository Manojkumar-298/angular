import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  currentUser: any;
  id: any = this.storageService.getUser().username;

  constructor(private storageService: StorageService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
  }
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  onSubmit() {
    console.log(this.id);
    const { username, email, phone, password, address } = this.currentUser;
    console.log(this.currentUser.id);
    this.router.navigate(['/login']);
    this.authService.edit(username, email, phone, password, address).subscribe({
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
