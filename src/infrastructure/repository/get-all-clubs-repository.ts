import { prisma } from "../../presentation/helpers"
import { GetAllClubsRepositoryInterface } from "../../data/protocols/get-all-clubs-repository-interface"

export class GetAllClubsRepository implements GetAllClubsRepositoryInterface {
    // @ts-ignore
    execute = async () => {

        const allClubs = await prisma.club.findMany({
            include: {
                lastTitles: true
            }
        })
        return allClubs
    }
}