import { Controller, HttpHelper } from ".."
import { GetAllClubsRepository } from "../../infrastructure/repository"

export class GetAllClubsController implements Controller {
  constructor(
    private readonly getAllClubsRepository: GetAllClubsRepository
  ) {}

  handle = async () => {
    const allClubs = await this.getAllClubsRepository.execute()

    if (!allClubs)
      return HttpHelper.NOT_FOUND()
    return HttpHelper.OK(allClubs)
    
  }
}
