const bcrypt = require('bcrypt');
const { registerUserSchema } = require('../validations/userSchemas');
const { selectUser } = require('../databases')
const db = require ("../databases")




const createUser = async (req, res) => {

    const { nome, email, senha } = req.body

    try{
        await registerUserSchema.validate(req.body);

        const resultado = await selectUser(email);     

        if (resultado !== null){
            return res.status(400).json("Já existe um usuário cadastrado com esse email")
        }

        const criptografiaSenha = await bcrypt.hash(senha, 10);


        const user = await db.query(`insert into public.usuario (nome, email, senha) values ('${nome}', '${email}', '${criptografiaSenha}')`)

        if (user.rowCount === 0){
            return res.status(400).json ("Não foi possível cadastrar o seu usuário, por favor tente novamente!")
        }
        
        return res.status(200).json("Usuário cadastrado com sucesso!");

    }catch (error){
        return res.status(500).json(error.message);
    }
  
}

const listUser = async (req, res) => {
    
    try{
        return res.status(200).json("Ok")
    }catch (error){
        return res.status(500).json(error.message)
    }

}

const updateUser = async (req, res) => {
    try{
        return res.status(200).json("Ok")
    }catch (error){
        return res.status(500).json(error.message)
    }

}

module.exports = {
    createUser,
    listUser,
    updateUser
}