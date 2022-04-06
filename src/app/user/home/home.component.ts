import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  get userAuth(){
    return this.authService.userAuth;
  }

  constructor( private router: Router, private authService: AuthService ) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['./auth']);
  }
}
