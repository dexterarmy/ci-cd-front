import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface userData {
  names: Array<{name:string, password:string}>,
  
}


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  names: Array<{name:string, password:string}>;
  noUser: string;


  constructor(private http: HttpClient){}

  ngOnInit(): void {

    this.http.get<userData>('http://localhost:3000/data').subscribe({
      next: response => {
        console.log(response.names);
        this.names = response.names;
        
      },
      error: err => {
        console.error(err);
      }
    })
    
  }

}
