import { PrismaClient } from "@prisma/client"

import { UpdateClubRepositoryInterface } from "../../data/protocols"
import { Club } from "../../domain/models"

export class UpdateClubRepository implements UpdateClubRepositoryInterface {
    //@ts-ignore
    execute = async ({
        name: clubName,
        badge,
        colors,
        lastTitles
    }: Club) => {

        const prisma = new PrismaClient()

        const club = await prisma.club.update({
            where: { name: clubName },
            data: {
                name: clubName,
                badge,
                colors,
                lastTitles: {
                    deleteMany: {},
                    create: lastTitles.map(({ name: lastTitleName, season, date }) => ({
                        name: lastTitleName,
                        season,
                        date
                    }))
                }
            },
            include: {
                lastTitles: true
            }
        })

        if (!club)
            return

        return club
    }
}
