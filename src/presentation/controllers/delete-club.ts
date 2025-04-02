import { DeleteClubRepository } from "../../infrastructure/repository"
import { HttpHelper } from "../helpers"
import { Controller } from "../protocols"

export class DeleteClubController implements Controller {
    constructor(
        private readonly deleteClubRepository: DeleteClubRepository
    ) {}

    // @ts-ignore
    handle = async (clubId: number) => {

        const club = await this.deleteClubRepository.execute(clubId)

        if(!club)
            return HttpHelper.NOT_FOUND()

        return HttpHelper.OK(club)
    }
}