const TeacherModel = require('../Models/TeachersModel')
export default {
  add: async (req, res) => {
    try {
      let data = req.body
      const list = await TeacherModel.default.Add(data)
      res.status(200).send(list)
    } catch (err) {
      next(err)
    }
  },
  list: async (req, res) => {
    try {
      let teachers = await TeacherModel.default.findAll()
      res.status(200).send(teachers)
    } catch (err) {
      next(err)
    }
  },
  listClasses: async (req, res) => {
    try {
      let id = parseInt(req.params.id)
      let classes = await TeacherModel.default.findByClass(id)
      res.status(200).send(classes)
    } catch (err) {
      next(err)
    }
  },
  listById: async (req, res) => {
    try {
      let id = parseInt(req.params.id)
      let teacher = await TeacherModel.default.findById(id)
      console.log(teacher)
      if (teacher !== undefined && teacher.length >= 1) {
        return res.status(200).send(teacher)
      } else {
        res.status(404).send({
          error: 'Teacher Does not Exist'
        })
      }
    } catch (err) {
      next(err)
    }
  },
  upDateById: async (req, res) => {
    try {
      let id = parseInt(req.params.id)
      let data = req.body
      const updatedTeacher = await TeacherModel.default.addById(id, data)
      res.status(200).send(updatedTeacher)
    } catch (err) {
      next(err)
    }
  },
  deleteById: async (req, res) => {
    try {
      let id = parseInt(req.params.id)
      const remainingTeachers = await TeacherModel.default.deleteById(id)
      res.status(200).send(remainingTeachers)
    } catch (err) {
      next(err)
    }
  }
}
