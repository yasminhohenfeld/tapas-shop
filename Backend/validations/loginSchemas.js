const yup = require('./yupSettings');

const loginSchema = yup.object().shape({
    email: yup.string().required().email(),
    senha: yup.string().required()
  });


module.exports = {
    loginSchema
}