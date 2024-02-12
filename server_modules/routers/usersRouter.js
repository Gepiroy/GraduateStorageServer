import express from 'express'
import controller from '../controllers/usersController.js'

const router = express.Router()

router.post('/login', ...controller.login)
router.post('/register', controller.register)
router.post('/:id', controller.set)
router.delete('/:id', controller.delete)

export default router