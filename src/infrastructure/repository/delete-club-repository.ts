import { PrismaClient } from "@prisma/client"
import { DeleteClubRepositoryInterface } from "../../data/protocols"

export class DeleteClubRepository implements DeleteClubRepositoryInterface {

  // @ts-ignore
  execute = async (clubId: number) => {

    const prisma = new PrismaClient()

    const club = await prisma.club.delete({
        where: {
            id: clubId
        }
    })

    return club
  }
}
