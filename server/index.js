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
  } catch (error) {
    console.log('Could not find shelf.')
    res.status(404).send(error)
  }
})

APP.post('/fic', async (req, res) => {
  try {
    console.log(
      `Posting new fic data ${JSON.stringify(req.body, undefined, 4)}}.`
    )
    res.sendStatus(200)
  } catch (error) {
    console.log('Could not post fic data.')
    res.status(400).send(error)
  }
})

APP.listen(port, () => {
  console.log(`API server listening on port ${port}`)
})
