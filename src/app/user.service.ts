import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

interface myData {
  message:  string,
  success:  boolean,
  username: string,
  chapter: {
    chapterID:    string,
    title:        string,
    description:  string,
    state:        string,
    defaultChip: {
      chip1:  string,
      chip2:  string,
      chip3:  string
    },
    userChip: {
      chip1:  string,
      chip2:  string,
      chip3:  string
    },
    editorChip: {
      value:  string,
      col:    string,
      row:    string
    }
  }[]
}

interface isLoggedIn {
  status: boolean,
  username:string
}

interface logoutStatus {
  success: boolean
}

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getSomeData() {
    return this.http.get<myData>('/api/database.php')
  }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('/api/isloggedin.php')
  }

  logout() {
    return this.http.get<logoutStatus>('/api/logout.php')
  }

}
