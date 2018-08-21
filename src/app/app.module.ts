import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { ControlComponent } from './control/control.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { LogoutComponent } from './logout/logout.component';
import { Validation } from './validation';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ControlComponent,
    SignupComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService,UserService,Validation],
  bootstrap: [AppComponent]
})
export class AppModule { }
