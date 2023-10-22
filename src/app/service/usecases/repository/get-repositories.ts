import { Repository } from "../../entities/repository";

export interface GetRepositories<T> {
  getRepositories(params: GetRepositories.Params): T
}


export namespace GetRepositories {
  export type Params = {
    username: string;
  }

  export type Result = Repository[];
}
