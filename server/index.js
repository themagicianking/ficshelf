import express from 'express'
const APP = express()
import 'dotenv/config'
APP.use(express.json())

const port = process.env.PORT || 3000
APP.listen(port, () => {
  console.log(`API server listening on port ${port}`)
})
