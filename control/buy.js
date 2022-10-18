 
const buytapas = async (req, res) => {
    try{
        return res.status(200).json("Ok")
    }catch (error){
        return res.status(500).json(error.message)
    }
   
}

const listtapas = async (req, res) => {
    try{
        return res.status(200).json("Ok")
    }catch (error){
        return res.status(500).json(error.message)
    }
   
}

module.exports = {
    buytapas,
    listtapas
}