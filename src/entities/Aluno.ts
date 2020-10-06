import faker from 'faker'

class Aluno {
  readonly nome: string
  readonly idade: number

  static tableName = 'ALUNO'

  constructor () {
    const name = faker.name.firstName()
    const slicedName = name.slice(0, 10).trimRight()

    this.nome = slicedName

    const age = faker.random.number(40) + 10

    this.idade = age
  }

  static getInsertQuery () {
    const query = `INSERT INTO ${Aluno.tableName} SET ?`

    return query
  }
}

export default Aluno
