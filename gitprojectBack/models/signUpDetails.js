import mongoose from 'mongoose'

const signUpBluePrint = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
})

export default mongoose.model('loginReact', signUpBluePrint)