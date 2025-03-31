import { PrismaClient } from "@prisma/client"

import { CreateClubRepositoryInterface } from "../../data/protocols"
import { Club } from "../../domain/models"

export class CreateClubRepository implements CreateClubRepositoryInterface {
    //@ts-ignore
    execute = async ({
        name: clubName,
        badge,
        colors,
        lastTitles
    }: Club) => {

        const prisma = new PrismaClient()

        const club = await prisma.club.create({
            data: {
                name: clubName,
                badge,
                colors,
                lastTitles: {
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