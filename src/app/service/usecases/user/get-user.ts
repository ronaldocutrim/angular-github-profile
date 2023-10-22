import { User } from "../../entities/user";

export interface GetUser<T> {
  getUser(params: GetUser.Params): T
}


export namespace GetUser {
  export type Params = {
    username: string;
  }

  export type Result = User
}
