import consola from 'consola'
import AlunoService from './aluno.service'

class AlunoController {
  async insertMultiple (quantity: number) {
    Array.from({ length: quantity }, async () => {
      try {
        const storaged = await AlunoService.insert()

        consola.success(storaged)
      } catch (error) {
        consola.error(error)
      }
    })
  }
}

export default new AlunoController()
