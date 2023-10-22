export class UserRoutes {
  private static baseUrl = 'https://api.github.com'


  static getRepos(username: string) {
    return `${this.baseUrl}/users/${username}`
  }
}
