import { Controller, HttpHelper } from ".."
import { FindClubByNameRepository } from "../../infrastructure/repository"

export class FindClubByNameController implements Controller {
  constructor(
    private readonly findClubByNameRepository: FindClubByNameRepository
  ) {}
  // @ts-ignore
  handle = async (clubName: string) => {
    const club = await this.findClubByNameRepository.execute(clubName)

    if (!club) return HttpHelper.NOT_FOUND()

    return HttpHelper.OK(club)
  }
}
