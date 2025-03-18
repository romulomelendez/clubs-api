import { PrismaClient } from "@prisma/client"

import { Club } from "../../domain/models"
import { CreateClubRepositoryInterface } from "../../data/protocols"

export class CreateClubRepository implements CreateClubRepositoryInterface {
    //@ts-ignore
    execute = async (params: Club) => {

        const prisma = new PrismaClient()
        const {
            name: clubName,
            badge,
            color,
            lastTitle: {
                name: lastTitleName,
                season,
                date
            }
        } = params

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

        if(!club)
            return

        return club
    }
}