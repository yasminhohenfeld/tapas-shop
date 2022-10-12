 
const buytacos = async (req, res) => {
    try{
        return res.status(200).json("Ok")
    }catch (error){
        return res.status(500).json(error.message)
    }
   
}

const listtacos = async (req, res) => {
    try{
        return res.status(200).json("Ok")
    }catch (error){
        return res.status(500).json(error.message)
    }
   
}

module.exports = {
    buytacos,
    listtacos
}