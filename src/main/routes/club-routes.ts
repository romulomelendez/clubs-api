import { Request, Response, Router } from "express"

import { FindClubByNameRepository, GetAllClubsRepository, CreateClubRepository } from "../../infrastructure/repository"
import { FindClubByNameController, GetAllClubsController, CreateClubController } from "../../presentation/controllers"

export const clubRoutes = Router()

clubRoutes.get("/api/admin/club/:clubName",
  async ({ params: { clubName } }: Request, res: Response) => {
  
    const findClubByNameRepository = new FindClubByNameRepository()
    const findClubByNameController = new FindClubByNameController(findClubByNameRepository)

    const { statusCode, body } = await findClubByNameController.handle(clubName)

    res.status(statusCode).json(body)
  }
)

clubRoutes.get("/api/admin/clubs",
  async (_: Request, res: Response) => {

    const getAllClubsRepository = new GetAllClubsRepository()
    const getAllClubsController = new GetAllClubsController(getAllClubsRepository)
    
    const { statusCode, body } = await getAllClubsController.handle()

    res.status(statusCode).json(body)
  }
)

clubRoutes.post("/api/admin/club/create", async ({ body: clubData }: Request, res: Response) => {

  const createClubRepository = new CreateClubRepository()
  const createClubController = new CreateClubController(createClubRepository)

  const { statusCode, body } = await createClubController.handle(clubData)

  res.status(statusCode).json(body)
})