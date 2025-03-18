import { Club } from "../../domain/models"

export interface CreateClubRepositoryInterface {
  execute: (
    params: CreateClubRepositoryInterface.Params,
  ) => Promise<CreateClubRepositoryInterface.Result>
}

export namespace CreateClubRepositoryInterface {
  export type Params = Club
  export type Result = Club | null
}
