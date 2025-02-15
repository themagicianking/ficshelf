import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { SHELF } from './data.js'

const APP = express()
const port = process.env.PORT || 3000

APP.use(express.json())
APP.use(cors())

APP.get('/shelf', async (req, res) => {
  try {
    console.log(`Sending shelf with ${SHELF.length} book(s).`)
    res.json(SHELF)
  } catch {
    console.log('Could not find shelf.')
    res.sendStatus(500)
  }
})

APP.listen(port, () => {
  console.log(`API server listening on port ${port}`)
})
