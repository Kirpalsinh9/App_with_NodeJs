const SQL = require('sql-template-strings')
const getDb = require('../db').getDb

export default {
  findAll: async (req, res) => {
    try {
      const db = getDb()
      let sql = 'SELECT * FROM classes'
      const result = await db.all(sql)
      return result
    } catch (err) {
      next(err)
    }
  },
  Add: async data => {
    try {
      const db = getDb()
      const add = await db.run(
        SQL`INSERT INTO classes(code,class_name,teacher_id,startDate,endDate) VALUES(${
          data.code
        }, ${data.class_name},${data.teacher_id},${data.startDate},${
          data.endDate
        })`
      )
      const id = await add.lastID
      const list = await db.get(SQL`SELECT * FROM classes where class_id=${id}`)
      return list
    } catch (err) {
      next(err)
    }
  },
  findById: async id => {
    try {
      const db = getDb()

      const result = await db.all(
        `SELECT * FROM classes natural join teachers where class_id=${id}`
      )
      return result
    } catch (err) {
      next(err)
    }
  },

  addById: async (id, data) => {
    try {
      const db = getDb()
      db.run(
        SQL`Update classes set code=${data.code} ,class_name=${
          data.class_name
        } ,teacher_id=${data.teacher_id},startDate=${data.startDate}, endDate=${
          data.endDat
        } where class_id=${id}`
      )
      const updatededId = await db.get(
        SQL`SELECT * FROM classes where class_id=${id}`
      )
      return updatededId
    } catch (err) {
      next(err)
    }
  },
  deleteById: async id => {
    try {
      const db = getDb()
      db.run(SQL`Delete from classes where class_id=${id}`)
      const remainingclasses = await db.all(SQL`SELECT * FROM classes`)
      return remainingclasses
    } catch (err) {
      next(err)
    }
  },
  listCourses: async a => {
    try {
      const db = getDb()
      const result = await db.all(
        `SELECT students.student_id,students.firstname,students.lastname FROM students natural join student_classes where class_id=${a} `
      )
      return result
    } catch (err) {
      next(err)
    }
  },
  addToCourse: async (id, data) => {
    try {
      const db = getDb()
      db.run(
        SQL`INSERT INTO  student_classes(class_id, student_id) VALUES(${id}, ${
          data.student_id
        })`
      )
      const list = await db.all(
        SQL`SELECT students.student_id,students.firstname,students.lastname FROM students natural join student_classes`
      )
      return list
    } catch (err) {
      next(err)
    }
  },
  removeCourse: async (stuid, classid) => {
    try {
      const db = getDb()
      db.run(
        SQL`Delete from student_classes where class_id=${classid} and student_id=${stuid}`
      )
      const remainingclasses = await db.all(SQL`SELECT * FROM student_classes`)
      return remainingclasses
    } catch (err) {
      next(err)
    }
  }
}
