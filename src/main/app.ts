import express, { json } from 'express'
import cors from 'cors'

import { route } from './routes/admin-club-routes'

const app = express()

app.use(cors())
app.use(json())
app.use(route)

export { app }