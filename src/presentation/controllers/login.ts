import { Login } from "../../domain/models"
import { LoginRepository } from "../../infrastructure/repository"
import { HttpHelper } from "../helpers"
import { Controller } from "../protocols"

export class LoginController implements Controller {

    constructor(
        private readonly loginRepository: LoginRepository
    ) {}

    // @ts-ignore
    handle = async (params: Login) => {
        
        const loginToken = await this.loginRepository.execute(params)

        if(!loginToken)
            return HttpHelper.NOT_FOUND()

        return HttpHelper.OK(loginToken)
    }
}