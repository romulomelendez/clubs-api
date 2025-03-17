import { Club } from "../../domain/models"

export interface FindClubByNameRepositoryInterface {
  execute: (
    params: FindClubByNameRepositoryInterface.Params,
  ) => Promise<FindClubByNameRepositoryInterface.Result>
} 

export namespace FindClubByNameRepositoryInterface {
  export type Params = string
  export type Result = Club | undefined | null
}
