const bcrypt = require('bcrypt');
const { registerUserSchema } = require('../validations/userSchemas');
const { selectUser, insertUser } = require('../databases')




const createUser = async (req, res) => {

    const { nome, email, senha } = req.body

    try{
        await registerUserSchema.validate(req.body);

        const resultado = await selectUser(email);     

        if (resultado !== null){
            return res.status(400).json("Já existe um usuário cadastrado com esse email")
        }

        const criptografiaSenha = await bcrypt.hash(senha, 10);


        //consertar essa parte do código
        // const user = {
        //     nome: nome,
        //     email: email,
        //     senha: criptografiaSenha        
        // }

        // console.log (user)

        // await insertUser(user)
        
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