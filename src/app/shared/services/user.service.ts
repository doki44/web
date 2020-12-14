import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {observable, Observable} from 'rxjs';
import {User} from '../models/user.model';
import {catchError, map, observeOn, tap} from 'rxjs/operators';

@Injectable()
export  class  UserService {
  constructor(private http: HttpClient){ }
  private userUrl = 'http://localhost:3000';
  public authName = '';
  addUser(user: User): Observable<User> {
    return this.http.post<User>( `${this.userUrl}/users`, user);
  }

  getUserByEmail(email: string): Observable<User> {
     return this.http.get<User[]>(`${this.userUrl}/users?email=${email}`)
       .pipe(map(users => users.length ? User.transform(users[0]) : null));
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }
}
