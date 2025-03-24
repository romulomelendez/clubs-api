import { PrismaClient } from "@prisma/client"

import { CreateClubRepositoryInterface } from "../../data/protocols"
import { Club } from "../../domain/models"

export class CreateClubRepository implements CreateClubRepositoryInterface {
    //@ts-ignore
    execute = async ({
        name: clubName,
        badge,
        color,
        lastTitle: {
            name: lastTitleName,
            season,
            date
        }
    }: Club) => {

        const prisma = new PrismaClient()

        const club = await prisma.club.create({
            data: {
                name: clubName,
                badge,
                color,
                lastTitle: {
                    create: {
                        name: lastTitleName,
                        season,
                        date
                    }
                }
            }
        })

        if (!club)
            return

        return club
    }
}