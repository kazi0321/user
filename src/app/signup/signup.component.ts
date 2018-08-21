import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { Validation } from '../validation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  message=""
  message2=""
  constructor(
    private user: UserService,
    private router: Router,
    private auth: AuthService,
    private varidation: Validation
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

  //キーが上がるたびに呼び出される関数
  onKeyUp(event){
    console.log(event);
    //↑を用いると呼ばれるたびにブラウザにデバッグするよ
    
    //キー入力イベントをmain関数に渡してtargetで振り分ける=>../validation.ts
    this.varidation.main(event)
    this.message=this.varidation.validationData.username_message
    this.message2=this.varidation.validationData.password_message
  }


}
