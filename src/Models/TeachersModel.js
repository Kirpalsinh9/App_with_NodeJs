const SQL = require('sql-template-strings')
const getDb = require('../db').getDb

export default {
  Add: async data => {
    try {
      const db = getDb()
      const add = await db.run(
        SQL`INSERT INTO  teachers (firstname, lastname) VALUES(${
          data.firstname
        }, ${data.lastname})`
      )
      const id = await add.lastID
      const list = await db.get(
        SQL`SELECT * FROM teachers where teacher_id=${id}`
      )
      return list
    } catch (err) {
      next(err)
    }
  },
  findAll: async () => {
    try {
      const db = getDb()
      const result = await db.all(SQL`SELECT * FROM  teachers`)
      console.log('The result in student findall get is', result)
      return result
    } catch (err) {
      next(err)
    }
  },
  findByClass: async id => {
    try {
      const db = getDb()
      const result = await db.all(
        SQL`SELECT * FROM  classes where teacher_id= ${id}`
      )
      return result
    } catch (err) {
      next(err)
    }
  },
  findById: async id => {
    try {
      const db = getDb()

      const result = await db.all(
        SQL`SELECT * FROM teachers where teacher_id=${id}`
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
        SQL`Update teachers set firstname=${data.firstname} ,lastname=${
          data.lastname
        }  where teacher_id=${id}`
      )
      const updatedTeacher = await db.all(
        SQL`SELECT * FROM teachers where teacher_id=${id}`
      )
      return updatedTeacher
    } catch (err) {
      next(err)
    }
  },
  deleteById: async id => {
    try {
      const db = getDb()
      db.run(SQL`Delete from teachers where teacher_id=${id}`)
      const remainingTeachers = await db.all(SQL`SELECT * FROM teachers`)
      return remainingTeachers
    } catch (err) {
      next(err)
    }
  }
}
