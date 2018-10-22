import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private user: UserService, private router: Router, private auth: AuthService) { }
  
  message="ログアウト処理中"

  ngOnInit() {
    this.user.logout().subscribe(data => {
      if(data.success) {
        //this.router.navigate(['login'])
        //this.router.navigate([''])
        //window.location.assign("http://172.20.145.140/user")
        this.message="ログアウトに成功しました"
      } else {
        this.message="ログアウトに失敗しました"
        //window.alert('Some problem')
      }
    })
  }

}
