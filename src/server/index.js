import 'babel-polyfill'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import path from 'path'

dotenv.config()

import routes from './routes/tasks'

const app = express()
const db = require('./database')

db.connect()

app.use(morgan('dev'))
app.use(express.json())
app.use('/api/tasks', routes)
app.use(express.static(path.join(__dirname, 'public')))

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`)
})
