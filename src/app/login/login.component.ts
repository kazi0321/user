import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MyErrorStateMatcher} from '../errorstatematcher';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  usernameFormControl = new FormControl('', [
    Validators.required
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$')
  ]);
  Matcher = new MyErrorStateMatcher();
  hide = true;


  constructor(private auth: AuthService, 
              private router: Router,
            ) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value

    this.auth.getUserDetails(username, password).subscribe(data => {
      if(data.success) {
        //this.router.navigate(['control'])
        window.location.assign("http://172.20.145.140/home")
        //this.auth.setLoggedIn(true)
      } else {
        window.alert(data.message)
      }
    })
  }

  navigateSignup() {
    this.router.navigate(['signup'])
  }

}
