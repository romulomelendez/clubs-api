import { Controller, HttpHelper } from ".."
import { Club } from "../../domain/models"
import { CreateClubRepository } from "../../infrastructure/repository"

export class CreateClubController implements Controller {
  
  constructor(private readonly createClubRepository: CreateClubRepository) {}

  //@ts-ignore
  handle = async (params: Club) => {
    
    const clubCreated = await this.createClubRepository.execute(params)

    if(!clubCreated)
      return HttpHelper.NOT_IMPLEMENTED()
    return HttpHelper.OK(clubCreated)
  }
}
