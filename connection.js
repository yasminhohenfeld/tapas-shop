const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'market_yh',
    password: 'admin',
    port: 5432
});

const query = (sql, param) => {
    return pool.query(sql, param);
} 