import mysql from 'mysql2'

const pool = mysql.createPool({ user: 'root', database: 'bdd' })

export default pool
