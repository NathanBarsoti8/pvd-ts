import express from 'express'
import path from 'path'

const app = express()

const env = 'development'
const directory = path.join(__dirname, `./src/configs/env/${env}`)
const port = app.get('port')

console.log(directory)

app.listen(port, () => { console.log(`API LISTENING ON PORT ${port}`) })

app.listen(3333)
