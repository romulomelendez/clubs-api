import { prisma } from "../../presentation/helpers"

import { DeleteClubRepositoryInterface } from "../../data/protocols"

export class DeleteClubRepository implements DeleteClubRepositoryInterface {

  // @ts-ignore
  execute = async (clubId: number) => {

    const club = await prisma.club.delete({
      where: {
        id: clubId
      }
    })

    return club
  }
}
