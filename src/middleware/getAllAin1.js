const getAin0 = require("../controllers/getAin0")

const getAllAin0 = async (req, res) => {
    try {
        const allAin0 = await getAin0()
        res.status(200).json(allAin0)
    } catch (error) {
        
    }
}

module.exports = getAllAin0