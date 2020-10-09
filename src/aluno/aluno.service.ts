import db from '../database/connection'
import Aluno from './aluno.model'

class AlunoService {
  async insert () {
    const { nome, idade } = new Aluno()
    const [insertedId] = await db.insert({ nome, idade }).into(Aluno.tableName)

    const storaged = {
      id: insertedId,
      nome,
      idade
    }

    return storaged
  }
}

export default new AlunoService()
