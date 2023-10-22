export class UserRoutes {
  private static baseUrl = 'https://api.github.com'


  static getUser(username: string) {
    return `${this.baseUrl}/users/${username}`
  }
}
