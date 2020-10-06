import pool from './database/pool'
import AlunoEntity from './entities/aluno'

pool('bdd').getConnection((_, connection) => {
  Array.from({ length: 15 }, () => connection.query(new AlunoEntity().getInsertQuery(), (error, results) => {
    if (error) {
      console.log(error)
      throw error
    }

    console.log({ results })

    connection.release()
  }))
})
