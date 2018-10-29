import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MyErrorStateMatcher} from '../errorstatematcher';
import { MyFirstPanelComponent } from '../my-first-panel/my-first-panel.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})



export class SignupComponent implements OnInit {
  title: string;
  message: string;

  openDialog(): void {
    this.title="パスワードポリシー"
    this.message="大文字小文字八文字以上"
    const dialogRef = this.dialog.open(MyFirstPanelComponent, {
      width: '250px',
      data: {title: this.title, message: this.message}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.message = result;
    });
  }

  usernameFormControl = new FormControl('', [
    Validators.required
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$')
  ]);
  rePasswordFormControl = new FormControl('', [
    Validators.required
  ]);

  Matcher = new MyErrorStateMatcher();
  hide = true;


  constructor(
    private user: UserService,
    private router: Router,
    private auth: AuthService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.user.isLoggedIn().subscribe(data => {
      if(data.status) {
        this.router.navigate(['control'])
      } else {
        //ここでは何もしない（現状）  
      }
    })
  }
  
  createUserDetail(event){
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value

    this.auth.postRegistration(username,password).subscribe(data => {
      if(data.success) {
        window.alert(data.message)
        this.router.navigate(['login'])
      } else {
        window.alert(data.message)
      }
    })
  }
}