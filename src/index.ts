import { questionInt } from 'readline-sync'
import AlunoService from './services/AlunoService'

const quantity = questionInt('How many rows do you want to insert ? ')

AlunoService.insert(quantity)
