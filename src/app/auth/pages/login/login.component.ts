import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  loading = false;

  data = {
    username : '',
    password : '',
  }

  constructor( private router: Router, private authService: AuthService, private formBuilder: FormBuilder, private _snackBar: MatSnackBar ) { 
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login() {

    // const username = this.form.value.username;
    // const password = this.form.value.password;

    this.data.username = this.form.value.username;
    this.data.password = this.form.value.password;

    // this.authService.login( this.data ).subscribe( resp => {
    //   console.log(resp)
    //   this.fakeLoading()
    // }, err => {
    //   console.log(err.error.error)
    // })

    

    this.authService.login( this.data ).subscribe( resp => {
      if ( resp.token ){
        this.fakeLoading()
        // this.router.navigate(['./users']);
      }
      }, err => {
        // console.log(err.error.error)
        this.error(err.error.error)
    })

    this.data.username = '';
    this.data.password = '';
  }

  error(message: string) {
    this._snackBar.open(message, 'cerrar', { duration: 2500 })
  }

  fakeLoading(){
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      
    }, 1500);
    this.router.navigate(['./users']);
  }

}
