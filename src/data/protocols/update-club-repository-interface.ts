import { Club } from "../../domain/models"

export interface UpdateClubRepositoryInterface {
    execute: (
        params: UpdateClubRepositoryInterface.Params
    ) => Promise<UpdateClubRepositoryInterface.Result>
}

export namespace UpdateClubRepositoryInterface {
    export type Params = Club
    export type Result = Club | null
}