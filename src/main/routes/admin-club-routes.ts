import { Request, Response, Router } from "express"

import { FindClubByNameRepository, GetAllClubsRepository, CreateClubRepository, UpdateClubRepository, DeleteClubRepository, LoginRepository } from "../../infrastructure/repository"
import { FindClubByNameController, GetAllClubsController, CreateClubController, UpdateClubController, DeleteClubController, LoginController } from "../../presentation/controllers"
import { AuthenticateAdmin } from "../../infrastructure/http/middleware"

export const route = Router()

// Login
route.post("/api/admin/login", async ({ body: loginData }: Request, res: Response) => {

  const loginRepository = new LoginRepository()
  const loginController = new LoginController(loginRepository)

  const { statusCode, clubData: token, message } = await loginController.handle(loginData)
  
  res.status(statusCode).json({
    token,
    message
  })
})

// Get one club
route.get("/api/admin/club/:clubName", AuthenticateAdmin, async ({ params: { clubName } }: Request, res: Response) => {
  
    const findClubByNameRepository = new FindClubByNameRepository()
    const findClubByNameController = new FindClubByNameController(findClubByNameRepository)

    const { statusCode, clubData: clubFound, message } = await findClubByNameController.handle(clubName)

    res.status(statusCode).json({ clubFound, message })
  }
)

// List all clubs
route.get("/api/admin/clubs", AuthenticateAdmin, async (_: Request, res: Response) => {

    const getAllClubsRepository = new GetAllClubsRepository()
    const getAllClubsController = new GetAllClubsController(getAllClubsRepository)
    
    const { statusCode, clubData: clubsFound } = await getAllClubsController.handle()

    res.status(statusCode).json(clubsFound)
  }
)

// Create club
route.post("/api/admin/club/create", AuthenticateAdmin, async ({ body: clubData }: Request, res: Response) => {

  const createClubRepository = new CreateClubRepository()
  const createClubController = new CreateClubController(createClubRepository)

  const { statusCode, clubData: clubCreated } = await createClubController.handle(clubData)

  res.status(statusCode).json(clubCreated)
})

// Update club
route.put("/api/admin/club/:clubName", AuthenticateAdmin, async ({ body: clubData }: Request, res: Response) => {

  const updateClubRepository = new UpdateClubRepository()
  const updateClubController = new UpdateClubController(updateClubRepository)

  const { statusCode, clubData: clubupdated } = await updateClubController.handle(clubData)

  res.status(statusCode).json(clubupdated)
})

// Delete club
route.delete("/api/admin/club/:clubId", AuthenticateAdmin, async ({ params }: Request, res: Response) => {

  const { clubId } = params

  const deleteClubRepository = new DeleteClubRepository()
  const deleteClubController = new DeleteClubController(deleteClubRepository)

  const { statusCode, clubData: clubDeleted } = await deleteClubController.handle(+clubId)

  res.status(statusCode).json(clubDeleted)
})