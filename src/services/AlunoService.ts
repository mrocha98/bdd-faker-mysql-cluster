import consola from 'consola'
import pool from '../database/pool'
import Aluno from '../entities/Aluno'

class AlunoService {
  insert (quantity: number) {
    pool.getConnection((error, connection) => {
      if (error) consola.error(error)
      else {
        Array.from({ length: quantity }, () => {
          const aluno = new Aluno()
          connection.query(Aluno.getInsertQuery(), aluno, (error) => {
            if (error) {
              consola.error(error)
              throw error
            }

            consola.info(aluno)
          })
        })
      }
      connection.release()
    })
  }
}

export default new AlunoService()
