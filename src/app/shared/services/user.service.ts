import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {observable, Observable} from 'rxjs';
import {User} from '../models/user.model';
import {catchError, map, observeOn, tap} from 'rxjs/operators';

@Injectable()
export  class  UserService {
  constructor(private http: HttpClient){
    this.isAuthenticated = localStorage.getItem('UserName') ? true : false;
  }
  private userUrl = 'http://localhost:3000';
  public authName = '';
  private isAuthenticated = false;
  login(user: User): void {
    window.localStorage.setItem('UserName', user.getName());
    window.localStorage.setItem('UserEmail', user.getEmail());
    this.authName = localStorage.getItem('UserName');
    this.isAuthenticated = true;
  }
  logout(): void {
    this.isAuthenticated = false;
    this.authName = '';
    window.localStorage.clear();
  }
  isLoggedIn(): boolean {
    this.authName = localStorage.getItem('UserName');
    return this.isAuthenticated;
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>( `${this.userUrl}/users`, user);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }
  getUserByEmail(email: string): Observable<User> {
     return this.http.get<User[]>(`${this.userUrl}/users?email=${email}`)
       .pipe(map(users => users.length ? User.transform(users[0]) : null));
  }
}
