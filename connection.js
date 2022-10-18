const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'tacos_shop',
    password: 'admin',
    port: 5432
});

const query = (sql, param) => {
    return pool.query(sql, param);
};

module.exports = query

