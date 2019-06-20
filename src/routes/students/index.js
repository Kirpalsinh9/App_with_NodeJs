import express from 'express'
import StudentsController from '../../Controllers/StudentsController'

const router = express.Router()
router.get('/', StudentsController.list)
router.get('/:id', StudentsController.listbyId)
router.post('/', StudentsController.add)
router.post('/student-classes', StudentsController.linktable)
router.get('/student-classes', StudentsController.listlinktable)
router.get('/:id/classes', StudentsController.listclass)
router.delete('/:id', StudentsController.deletebyId)
router.put('/:id', StudentsController.updatebyId)

module.exports = router
