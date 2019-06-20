const SQL = require('sql-template-strings')
const getDb = require('../db').getDb

export default {
  Add: async data => {
    try {
      const db = getDb()
      const result = await db.run(
        SQL`INSERT INTO students(firstname, lastname) VALUES(${
          data.firstname
        }, ${data.lastname})`
      )
      const id = result.lastID
      const allstudents = await db.all(
        SQL`SELECT * FROM students where student_id=${id}`
      )
      return allstudents
    } catch (err) {
      next(err)
    }
  },
  findAll: async () => {
    try {
      const db = getDb()
      const result = await db.all(SQL`SELECT * FROM students`)
      return result
    } catch (err) {
      next(err)
    }
  },
  Addid: async data => {
    const db = getDb()
    const name = await db.run(
      SQL`INSERT INTO student_classes(class_id, student_id) VALUES(${
        data.class_id
      }, ${data.student_id})`
    )
    console.log(name)
    // const result = await db.all(SQL`SELECT * FROM student_classess`)
    // return result
  },
  findAllid: async () => {
    try {
      const db = getDb()
      const result = await db.all(SQL`SELECT * FROM student_classes`)
      return result
    } catch (err) {
      next(err)
    }
  },
  findClass: async data => {
    try {
      const db = getDb()
      const result = await db.all(
        SQL`SELECT * FROM  classes natural join student_classes where student_classes.student_id=${data} `
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
        SQL`Update students set firstname=${data.firstname} ,lastname=${
          data.lastname
        }  where student_id=${id}`
      )
      const result = await db.get(
        SQL`SELECT * FROM students where student_id=${id}`
      )
      return result
    } catch (err) {
      next(err)
    }
  },
  findById: async data => {
    try {
      const db = getDb()
      const result = await db.get(
        SQL`SELECT * FROM students where student_id=${data}`
      )
      return result
    } catch (err) {
      next(err)
    }
  },
  deleteById: async id => {
    try {
      const db = getDb()
      const deletestudent = await db.run(
        SQL`Delete from Students  where student_id=${id}`
      )
      return deletestudent
    } catch (err) {
      next(err)
    }
  }
}
