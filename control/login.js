
const login = async (req, res) => {
    try{
        return res.status(200).json("Ok")
    }catch (error){
        return res.status(500).json(error.message)
    }
   
}

module.exports = login