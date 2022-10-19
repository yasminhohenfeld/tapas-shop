const bcrypt = require('bcrypt');
const { registerUserSchema } = require('../validations/userSchemas');
const { selectUser } = require('../databases')



const createUser = async (req, res) => {

    const { nome, email, senha } = req.body

    try{
        await registerUserSchema.validate(req.body);

        const resultado = await selectUser(email)
    

        console.log (resultado)

        return res.status(200).json("Ok");
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