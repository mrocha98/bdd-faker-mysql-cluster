import faker from 'faker/locale/pt_BR'

class Aluno {
  readonly nome: string
  readonly idade: number

  constructor () {
    const name = faker.name.firstName()
    const slicedName = name.slice(0, 10)

    this.nome = slicedName

    const age = faker.random.number(65)

    this.idade = age
  }

  getInsertQuery () {
    const query = `INSERT INTO ALUNOS(nome, idade) VALUES (${this.nome}, ${this.idade});`

    return query
  }
}

export default Aluno
