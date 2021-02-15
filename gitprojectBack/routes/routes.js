import express from 'express'
const router = express.Router()

import {signUp, login, confirm} from '../controllers/endPoints.js'

router.post('/register', signUp)

router.post('/signin', login)

router.post('/validateEmail', confirm)

export default router