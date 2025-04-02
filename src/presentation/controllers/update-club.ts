import { Controller, HttpHelper } from ".."
import { Club } from "../../domain/models"
import { UpdateClubRepository } from "../../infrastructure/repository"

export class UpdateClubController implements Controller {

    constructor(private readonly updateClubRepository: UpdateClubRepository) {}

    // @ts-ignore
    handle = async (params: Club) => {

        const clubUpdated = await this.updateClubRepository.execute(params)

        if(!clubUpdated)
            return HttpHelper.NOT_IMPLEMENTED()
        
        return HttpHelper.OK(clubUpdated)
    }
}