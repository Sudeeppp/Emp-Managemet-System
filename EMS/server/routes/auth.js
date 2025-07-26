import express from 'express'
import { login } from '../controllers/authController.js'

const router = express.Router()

// router.post('/login', (req, res) => {
//     res.send('login')
// })

//routing

router.post('/login', login)
router.post('/varify',login)

export default router