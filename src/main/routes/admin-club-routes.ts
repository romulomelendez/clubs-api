import { Request, Response, Router } from "express"

import { FindClubByNameRepository, GetAllClubsRepository, CreateClubRepository, UpdateClubRepository, DeleteClubRepository, LoginRepository } from "../../infrastructure/repository"
import { FindClubByNameController, GetAllClubsController, CreateClubController, UpdateClubController, DeleteClubController, LoginController } from "../../presentation/controllers"

export const route = Router()

// Login
route.post("/api/admin/login", async ({ body: loginData }: Request, res: Response) => {

  const loginRepository = new LoginRepository()
  const loginController = new LoginController(loginRepository)

  const { statusCode, body: token } = await loginController.handle(loginData)
  
  res.status(statusCode).json(token)
})

// Get one club
route.get("/api/admin/club/:clubName",
  async ({ params: { clubName } }: Request, res: Response) => {
  
    const findClubByNameRepository = new FindClubByNameRepository()
    const findClubByNameController = new FindClubByNameController(findClubByNameRepository)

    const { statusCode, body } = await findClubByNameController.handle(clubName)

    res.status(statusCode).json(body)
  }
)

// List all clubs
route.get("/api/admin/clubs",
  async (_: Request, res: Response) => {

    const getAllClubsRepository = new GetAllClubsRepository()
    const getAllClubsController = new GetAllClubsController(getAllClubsRepository)
    
    const { statusCode, body } = await getAllClubsController.handle()

    res.status(statusCode).json(body)
  }
)

// Create club
route.post("/api/admin/club/create", async ({ body: clubData }: Request, res: Response) => {

  const createClubRepository = new CreateClubRepository()
  const createClubController = new CreateClubController(createClubRepository)

  const { statusCode, body } = await createClubController.handle(clubData)

  res.status(statusCode).json(body)
})

// Update club
route.put("/api/admin/club/:clubName", async ({ body: clubData }: Request, res: Response) => {

  const updateClubRepository = new UpdateClubRepository()
  const updateClubController = new UpdateClubController(updateClubRepository)

  const { statusCode, body } = await updateClubController.handle(clubData)

  res.status(statusCode).json(body)
})

// Delete club
route.delete("/api/admin/club/:clubId", async ({ params }: Request, res: Response) => {

  const { clubId } = params

  const deleteClubRepository = new DeleteClubRepository()
  const deleteClubController = new DeleteClubController(deleteClubRepository)

  const { statusCode, body } = await deleteClubController.handle(+clubId)

  res.status(statusCode).json(body)
})