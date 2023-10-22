import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { UserRoutes } from './routes';
import { UserResponse } from './model';
import { GetUser } from '../../usecases/user/get-user';

@Injectable({
  providedIn: 'root',
})
export class UserService implements GetUser<Observable<GetUser.Result>> {
  constructor(private http: HttpClient) {}

  getUser({username}: GetUser.Params) {
    return this.http.get<UserResponse>(UserRoutes.getUser(username)).pipe(
      map((data) => {
        return {
          name: data.name,
          thumbail: data.avatar_url,
          githubUrl: data.html_url,
          location: data.location,
          work: data.company
        };
      })
    );
  }
}
