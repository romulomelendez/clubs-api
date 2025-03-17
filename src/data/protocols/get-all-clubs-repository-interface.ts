import { Club } from "../../domain/models"

export interface GetAllClubsRepositoryInterface {
    execute: () => Promise<GetAllClubsRepositoryInterface.Result>
}

export namespace GetAllClubsRepositoryInterface {
    export type Result = Club | null 
}