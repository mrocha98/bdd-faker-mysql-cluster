import knex from 'knex'

const { NODE_ENV } = process.env

const connection = knex({
  client: 'mysql2',
  debug: NODE_ENV === 'development',
  connection: {
    database: 'bdd',
    user: 'root'
  }
})

export default connection
