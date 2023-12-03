const getAin3 = require("../controllers/getAin3")

const getAllAin3 = async (req, res) => {
    try {
        const allAin3 = await getAin3()
        res.status(200).json(allAin3)
    } catch (error) {
        
    }
}

module.exports = getAllAin3