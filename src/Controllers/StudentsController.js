const StudentModel = require('../Models/StudentModel')
export default {
  add: async (req, res, next) => {
    try {
      const firstname = req.body.firstname
      const lastname = req.body.lastname
      if (firstname !== undefined && lastname !== undefined) {
        let data = req.body
        let allstudents = await StudentModel.default.Add(data)
        res.status(200).send(allstudents)
      } else {
        return res.status(404).send({
          error: 'Plz enter firstname and lastname'
        })
      }
    } catch (err) {
      next(err)
    }
  },
  list: async (req, res, next) => {
    try {
      let result = await StudentModel.default.findAll()
      if (result !== undefined && result.length > 0) {
        return res.status(200).send(result)
      } else {
        res.status(404).send({
          error: 'Nothing to show'
        })
      }
    } catch (err) {
      next(err)
    }
  },
  listclass: async (req, res, next) => {
    try {
      let id = parseInt(req.params.id)
      let result = await StudentModel.default.findClass(id)
      if (result !== undefined && result >= 1) {
        res.status(200).send(result)
      } else {
        res.status(404).send({
          error: 'No Class'
        })
      }
    } catch (err) {
      next(err)
    }
  },
  linktable: async (req, res, next) => {
    StudentModel.default.Addid(req.body)
    res.end()
  },
  listlinktable: async (req, res, next) => {
    try {
      let result = await StudentModel.default.findAllid()
      res.status(200).send(result)
    } catch (err) {
      next(err)
    }
  },
  updatebyId: async (req, res, next) => {
    try {
      let id = parseInt(req.params.id)
      let updateStu = await StudentModel.default.findById(id)
      console.log(updateStu)
      if (updateStu !== undefined) {
        let data = req.body
        let updatedStudent = await StudentModel.default.addById(id, data)
        res.status(200).send(updatedStudent)
      } else {
        res.status(404).send({
          error: 'PLZ enter correct ID number'
        })
      }
    } catch (err) {
      next(err)
    }
  },
  listbyId: async (req, res, next) => {
    try {
      let id = parseInt(req.params.id)

      let result = await StudentModel.default.findById(id)
      if (result !== undefined) {
        return res.status(200).send(result)
      } else {
        res.status(404).send({
          error: 'Student does not Exist'
        })
      }
    } catch (err) {
      next(err)
    }
  },
  deletebyId: async (req, res, next) => {
    try {
      let id = parseInt(req.params.id)
      let deletedStu = await StudentModel.default.deleteById(id)

      res.end(JSON.stringify(deletedStu))
    } catch (err) {
      next(err)
    }
  }
}
