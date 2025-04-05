import { Login } from "../../domain/models"

export interface LoginRepositoryInterface {
    execute: (params: LoginRepositoryInterface.Params) => Promise<LoginRepositoryInterface.Result>
}

export namespace LoginRepositoryInterface {
    export type Params = Login
    export type Result = string
}