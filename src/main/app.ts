import express, { json } from 'express'
import cors from 'cors'

import { clubRoutes } from './routes/club-routes'

const app = express()

app.use(cors())
app.use(json())
app.use(clubRoutes)

export { app }