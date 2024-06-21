import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  isLoggedIn = false;
  constructor(private storageService: StorageService,private router: Router) { }
  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    // this.currentUser =localStorage.getItem('token')
    console.log( this.currentUser.username);
  }
  clear(){
    this.isLoggedIn = false;
    this.storageService.clean();
    this.router.navigate(['/login']);
  }
}