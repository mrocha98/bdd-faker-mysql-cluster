import mysql from 'mysql2'

const pool = (database: string) => mysql.createPool({ user: 'root', database })

export default pool
