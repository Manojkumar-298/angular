import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authentication.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit  {
  users : any;
  constructor(private authService: AuthService){}
  ngOnInit(){
    this.authService.getusers().subscribe(data => {
      this.users =  data;
      // JSON.stringify(this.users );
      // console.log(JSON.stringify( data));
    });
  }
}

