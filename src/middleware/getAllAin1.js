const getAin1 = require("../controllers/getAin1")

const getAllAin1 = async (req, res) => {
    try {
        const allAin1 = await getAin1()
        res.status(200).json(allAin1)
    } catch (error) {
        
    }
}

module.exports = getAllAin1