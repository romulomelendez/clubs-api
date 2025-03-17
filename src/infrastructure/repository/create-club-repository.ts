import { PrismaClient } from "@prisma/client"
import { CreateClubRepositoryInterface } from "../../data/protocols"
import { Club } from "../../domain/models"

export class CreateClubRepository implements CreateClubRepositoryInterface {
    //@ts-ignore
    execute = async (params: Club) => {

        const prisma = new PrismaClient()
        const {
            name: clubName,
            lastTitle: {
                name: titleName,
                season,
                date
            }
        } = params

        const clubCreated = await prisma.club.create({
            data: {
                name: clubName,
                lastTitle: {
                    create: {
                        name: titleName,
                        season,
                        date 
                    }
                }
            }
        })

        return clubCreated
    }
}