import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    notes: {
        type: String,
        required: true,
    },
})

export const UserModel = mongoose.model('userFile', UserSchema)
