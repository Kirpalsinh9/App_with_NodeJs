const ClassModel = require('../Models/ClassesModel')
export default {
  findAll: async (req, res) => {
    try {
      let result = await ClassModel.default.findAll()
      res.status(200).send(result)
    } catch (err) {
      next(err)
    }
  },
  add: async (req, res) => {
    try {
      let data = req.body
      let list = await ClassModel.default.Add(data)
      res.status(200).send(list)
    } catch (err) {
      next(err)
    }
  },
  findById: async (req, res) => {
    try {
      let id = parseInt(req.params.id)
      console.log(id)
      let result = await ClassModel.default.findById(id)

      res.status(200).send(result)
    } catch (err) {
      next(err)
    }
  },
  updateById: async (req, res) => {
    try {
      let id = parseInt(req.params.id)
      let data = req.body
      const updatedClass = await ClassModel.default.addById(id, data)
      res.status(200).send(updatedClass)
    } catch (err) {
      next(err)
    }
  },
  deleteById: async (req, res) => {
    try {
      let id = parseInt(req.params.id)
      const remainingclasses = await ClassModel.default.deleteById(id)
      res.status(200).send(remainingclasses)
    } catch (err) {
      next(err)
    }
  },
  Enrolled: async (req, res) => {
    try {
      let id = parseInt(req.params.class_id)
      let result = await ClassModel.default.listCourses(id)
      res.status(200).send(result)
    } catch (err) {
      next(err)
    }
  },
  newstudent: async (req, res) => {
    try {
      let id = parseInt(req.params.class_id)
      const list = await ClassModel.default.addToCourse(id, req.body)
      res.status(200).send(list)
    } catch (err) {
      next(err)
    }
  },
  removestudent: async (req, res) => {
    try {
      let studentId = parseInt(req.params.id)
      let classId = parseInt(req.params.class_id)
      const remainingStudent = await ClassModel.default.removeCourse(
        studentId,
        classId
      )
      res.status(200).send(remainingStudent)
    } catch (err) {
      next(err)
    }
  }
}
