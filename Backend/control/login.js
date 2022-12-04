const {loginSchema} = require('../validations/loginSchemas')
const { selectUser } = require('../databases');
const jwt = require('jsonwebtoken')

const login = async (req, res) => {

    const {email, senha} = req.body;


    try{
        await loginSchema.validate(req.body);

        const user = await selectUser(email);


        if (user === null){
            return res.status(400).json ("Não existe um usuário cadastrado com esse email!");
        }


        const token = await jwt.sign({ id: user.id }, "yamin", { expiresIn: '8h' });


        const dados = {
            id: user.id,
            nome: user.nome,
            email: user.email,
            token: token
        }

        return res.status(200).json(dados)
    }catch (error){
        return res.status(500).json(error.message)
    }
   
}

module.exports = login