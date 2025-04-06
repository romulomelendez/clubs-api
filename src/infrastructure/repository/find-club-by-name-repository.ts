import { prisma } from "../../presentation/helpers"

import { FindClubByNameRepositoryInterface } from "../../data/protocols"

export class FindClubByNameRepository implements FindClubByNameRepositoryInterface {

  // @ts-ignore
  execute = async (clubName: string) => {

    const club = await prisma.club.findUnique({
      where: {
        name: clubName
      },
      include: {
        lastTitles: true
      }
    })

    return club
  }
}
