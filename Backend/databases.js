const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'tapas_shop',
    password: 'postgres',
    port: 5432
});

const query = (sql, param) => {
    return pool.query(sql, param);
};

const selectUser = async (email) =>{

    const sqlSelect = 'select email, senha, nome, id from public.usuario where email=$1'
    const paramsSelect = [email]
    const results = await query(sqlSelect, paramsSelect)
    
    if (results.rowCount === 0){
        return null
    }
    return results.rows[0]
}

//consertar o insert
// const insertUser = async (dados) => {
//     const sqlInsert = 'insert into public.usuario dados values (nome, email, senha)'
//     const paramsSelect = [dados]
//     const results = await query(sqlInsert, paramsSelect)

//     if (results.rowCount === 0){
//         return null
//     }
//     return results.rows[0]
// }

module.exports = {
    query,
    selectUser,
    insertUser
} 

