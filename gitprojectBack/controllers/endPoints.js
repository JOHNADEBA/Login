import express from 'express'
import signUpBluePrint from '../models/signUpDetails.js'
import bcrypt from 'bcrypt'

export const signUp = async (req, res)=> {

const saltPass = await bcrypt.genSalt(10)
const savePass = await bcrypt.hash(req.body.password, saltPass)

    let newUser = await new signUpBluePrint({
        name: req.body.name,
        email: req.body.email,
        password: savePass
    })
    
    newUser.save()
    .then(data => res.json(data))
    .catch(error => res.json(console.error()))
}

export const login = async(req, res)=>{

  signUpBluePrint.findOne({email: req.body.email})
  .then(user =>{
    console.log(user)
    if(!user) res.sendStatus(204)
    else {
      bcrypt.compare(req.body.password, user.password)
      .then(passwordMatch => passwordMatch ? res.sendStatus(200) : res.sendStatus(204))
    }
  })


}

export const confirm = async(req, res)=>{
    signUpBluePrint.findOne({email: req.body.email})
    .then(user => user ? res.sendStatus(204) : res.sendStatus(200))
}