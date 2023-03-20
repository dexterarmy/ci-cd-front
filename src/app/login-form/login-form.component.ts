import { Component, OnInit } from '@angular/core';
// import * as FileSaver from 'file-saver';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface userData {
    names: Array<{name:string, password:string}>,
    
}


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  name: string;
  password: string;
  names: Array<{name:string, password:string}>;
  noUser: string;

  
  

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient){}

  ngOnInit(): void {

    this.name = sessionStorage.getItem('name');
    this.password = sessionStorage.getItem('password');

    if(this.name && this.password){
      this.router.navigate(['/home']);
    } else{
      this.router.navigate(['/login']);
    }

    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    })
    
  }

  onSubmit() {

    this.name = this.loginForm.get('name').value;
    this.password = this.loginForm.get('password').value;
    // const data = {
    //   name: this.name,
    //   password: this.password,
    // }

    this.http.get<userData>('http://localhost:3000/data').subscribe({
      next: response => {
        console.log(response.names);
        // this.names = response.names;
        const data = response.names.find(name => (this.name === name.name && this.password === name.password));
        if(data){
          sessionStorage.setItem('name', this.name);
          sessionStorage.setItem('password', this.password);
          this.router.navigate(['/home']);

        }else {

          this.noUser = 'please login first';

        }
      },
      error: err => {
        console.error(err);
      }
    })
      
    // sessionStorage.setItem('name', this.name);
    // sessionStorage.setItem('password', this.password);

    // this.http.post("http://localhost:3000/data", data ).subscribe({ next(response){
    //   console.log("login successful", response)
    // }, error (error) {
    //   console.error("login failed", error);
    // }})

    // this.router.navigate(['/home']);

    this.loginForm.reset();
    


   
    
   
  }

}


