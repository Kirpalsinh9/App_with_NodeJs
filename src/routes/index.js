import express from 'express'
import students from './students'
import teachers from './teachers'
import classes from './classes'

const router = express.Router()
router.use('/students', students)
router.use('/teachers', teachers)
router.use('/classes', classes)

export default router
