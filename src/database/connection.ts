import mysql from 'mysql2'

const connection = (database: string) => mysql.createConnection({ user: 'root', database })

export default connection
