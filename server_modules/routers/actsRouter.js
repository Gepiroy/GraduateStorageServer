import express from 'express'
import controller from '../controllers/actsController.js'

const router = express.Router()

router.get('/', (req, res)=>{
    res.send('aha') //some testing reply
})

export default router