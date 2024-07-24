import express from 'express'
import {UserModel} from '../models/Users.js'
const router = express.Router()

router.get('/getUsers', async(req, res) => {
    UserModel.find({})
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        console.log(err)
    })
})

router.delete('/deleteUser/:id', async(req, res) => {
    const {id} = req.params
    UserModel.findByIdAndDelete(id)
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/createList', async (req, res) => {
    const name = req.body.itemName
    const date = req.body.dueDate
    const taskDescription = req.body.notes
    console.log(req)
    try {
        if(!name || !date || !taskDescription) {
            return res.status(400).send({
                message: 'Send all required fields'
            })
        }
        const user = req.body
        const newUser = new UserModel(user)
        await newUser.save() // Mongoose function
    
        res.json(user)
    } catch (err) {
        res.status(500).send({message: err.message})
    }
})

export default router