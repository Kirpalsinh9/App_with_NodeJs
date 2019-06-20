import express from 'express'
import ClassesController from '../../Controllers/ClassesController'

const router = express.Router()
router.get('/', ClassesController.findAll)
router.get('/:id', ClassesController.findById)
router.post('/', ClassesController.add)
router.put('/:id', ClassesController.updateById)
router.delete('/:id', ClassesController.deleteById)
router.get('/:class_id/students', ClassesController.Enrolled)
router.post('/:class_id/students', ClassesController.newstudent)
router.delete('/:class_id/students/:id', ClassesController.removestudent)

module.exports = router
