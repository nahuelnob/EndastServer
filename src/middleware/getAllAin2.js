const getAin2 = require("../controllers/getAin2")

const getAllAin2 = async (req, res) => {
    try {
        const allAin2 = await getAin2()
        res.status(200).json(allAin2)
    } catch (error) {
        
    }
}

module.exports = getAllAin2