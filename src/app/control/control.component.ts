import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  message= "loading..."

  constructor(
    private auth: AuthService, 
    private router: Router,
    private user:UserService) { }

  ngOnInit() {
    this.user.isLoggedIn().subscribe(data => {
      if(data.status) {
        this.user.getSomeData().subscribe(data => {
          this.message = data.username
        })
      } else {
        this.router.navigate(['login'])
        window.alert('セッション情報がありません\nログインしてください')
      }
    })
    
  }
}
