import { app } from './app'

import 'dotenv/config'

const port = process.env.PORT || 3331

app.listen(port, () => console.log(`🚀 Server listening on port: ${port}`))