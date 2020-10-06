import connection from './database/connection'

connection('bdd').query('SELECT 1+? as test1', [10], (err, rows) => {
  if (err) console.log(err)
  else console.log(rows)
})

console.log('salve salve meus chegados')
