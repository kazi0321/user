import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ResolveStart } from '@angular/router/src/events';

interface myData {
  success: boolean,
  message: string
}

interface registrationStatus{
  success: boolean,
  message: string
}

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }
  
  getUserDetails(username, password) {
    // post these details to API server return user info if correct
    return this.http.post<myData>('/api/auth.php', {
      username,
      password
    })
  }

  postRegistration(username,password){
    return this.http.post<registrationStatus>('/api/createuser.php', {
      username,
      password
    })
  }

}
