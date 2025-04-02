import { Club } from "../../domain/models"

export interface DeleteClubRepositoryInterface {
    execute: (
        params: DeleteClubRepositoryInterface.Params
    ) => Promise<DeleteClubRepositoryInterface.Result>
}

export namespace DeleteClubRepositoryInterface {
    export type Params = number
    export type Result = Club | null
}