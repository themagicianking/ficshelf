import express from 'express'
const APP = express()
import 'dotenv/config'
import { SHELF } from './data.js'
APP.use(express.json())

APP.get('/shelf', async (req, res) => {
  try {
    console.log(`Sending shelf with ${SHELF.length} book(s).`)
    res.json(SHELF)
  } catch {
    console.log("Could not find shelf.")
    res.status(500)
  }

})

const port = process.env.PORT || 3000
APP.listen(port, () => {
  console.log(`API server listening on port ${port}`)
})
