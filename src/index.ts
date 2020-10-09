import { questionInt } from 'readline-sync'
import { AlunoController } from './aluno'

const quantity = questionInt('How many rows do you want to insert ? ')

;(async () => {
  await AlunoController.insertMultiple(quantity)
})()
