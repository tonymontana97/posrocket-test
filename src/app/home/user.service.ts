import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHttpResponse, User } from '@app/types';
import { filter, map, pluck } from 'rxjs/operators';

export const routes = {
  user: () => `https://api.myjson.com/bins/zbor2`
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private readonly http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http
      .get<IHttpResponse<User[]>>(routes.user())
      .pipe(map(response => response.data.map(user => new User(user))));
  }

  public getUser(id: string): Observable<User> {
    return this.http.get<IHttpResponse<User[]>>(routes.user()).pipe(
      map(response => response.data),
      map(users => users.filter(user => user._id === id)),
      map(filtered => (filtered[0] ? new User(filtered[0]) : null))
    );
  }
}
