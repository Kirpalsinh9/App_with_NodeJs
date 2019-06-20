import express from 'express'
import TeachersController from '../../Controllers/TeachersController'

const router = express.Router()
router.get('/', TeachersController.list)
router.post('/', TeachersController.add)
router.get('/:id/classes', TeachersController.listClasses)
router.get('/:id', TeachersController.listById)
router.put('/:id', TeachersController.upDateById)
router.delete('/:id', TeachersController.deleteById)
module.exports = router
