import express from 'express'
import cors from 'cors'
import pkg from 'pg'
import 'dotenv/config'
// import { SHELF } from './data.js'

const APP = express()
const port = process.env.PORT || 3000
const { Pool } = pkg
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD
})

APP.use(express.json())
APP.use(cors())

APP.get('/shelf', async (req, res) => {
  const DATABASE = await pool.connect()
  DATABASE.release()
  try {
    const SHELF = await DATABASE.query('SELECT * FROM fics;')
    console.log(`Sending shelf with ${SHELF.rows.length} book(s).`)
    res.json(SHELF.rows)
  } catch (error) {
    console.log('Could not find shelf.')
    res.status(404).send(error)
  }
})

APP.post('/fic', async (req, res) => {
  const DATABASE = await pool.connect()
  DATABASE.release()
  try {
    const FIC = req.body
    await DATABASE.query(
      `INSERT INTO fics (title, author, fandom, link) VALUES ('${FIC.title}', '${FIC.author}', '${FIC.fandom}', '${FIC.link}');`
    )
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
