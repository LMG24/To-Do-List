import express from 'express'
const app = express()
import {PORT, mongoURL} from './config.js'
import {UserModel} from './models/Users.js'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './user_route/user_router.js'

app.use(express.json())
app.use(cors())
app.use('/', router)

mongoose.connect(mongoURL)
    .then(() => {
        console.log('Success')
        app.listen(PORT, () => {
            console.log(`App is on http://localhost:${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })