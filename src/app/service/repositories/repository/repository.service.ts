import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { RepositoryRoutes } from './routes';
import { RepositoriesResponse } from './model';
import { GetRepositories } from '../../usecases/repository/get-repositories';


@Injectable({
  providedIn: 'root',
})



export class RepositoryService implements GetRepositories<Observable<GetRepositories.Result>> {
  constructor(private http: HttpClient) {}

  getRepositories({
    username,
  }: GetRepositories.Params) {
    return this.http.get<RepositoriesResponse[]>(
      RepositoryRoutes.getRepos(username)
    ).pipe(
      map((data) => data.map(value => {
        return {
          name: value.name,
          githubUrl: value.html_url
        }
      }))
    );
  }
}
