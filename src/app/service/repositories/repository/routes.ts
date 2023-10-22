export class RepositoryRoutes {
  private static baseUrl = 'https://api.github.com'


  static getRepos(username: string) {
    return `${this.baseUrl}/users/${username}/repos`
  }
}
