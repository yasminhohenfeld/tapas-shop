const db = require('../databases')
const jwt  = require('jsonwebtoken');


const verifyLogin = async (req, res, next) => {
    
  const { authorization } = req.headers;
  
  if (!authorization) {
    return res.status(401).json('Não autorizado');
  }
  try {
   
    const token = authorization.replace('Bearer ', '').trim();


    const { id } = jwt.verify(token, "yamin");


    const userFound = await db.query(`select id, nome, email from public.usuario where id='${id}'`)

   if (userFound.rowCount === 0){
    return res.status(400).send("Usuario não encontrado!!")
   }

    req.user = userFound.rows[0].id

    console.log (req.user)
    
   
    next();
  } catch (error) {
    return res.status(500).json(error.message);
  }

}

module.exports = verifyLogin
