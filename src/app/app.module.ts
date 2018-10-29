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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MyFirstPanelComponent } from './my-first-panel/my-first-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ControlComponent,
    SignupComponent,
    LogoutComponent,
    MyFirstPanelComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
  ],
  entryComponents: [MyFirstPanelComponent],
  providers: [AuthService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
