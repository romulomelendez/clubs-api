import { PrismaClient } from "@prisma/client"
import { FindClubByNameRepositoryInterface } from "../../data/protocols"

export class FindClubByNameRepository implements FindClubByNameRepositoryInterface {

  // @ts-ignore
  execute = async (clubName: string) => {

    const prisma = new PrismaClient()

    const club = await prisma.club.findUnique({
      where: {
        name: clubName
      },
      include: {
        lastTitle: true
      }
    })

    return club
  }
}
