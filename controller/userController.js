const imageModel=require('../model/imageSchema')

module.exports = {
    getImage: async(req, res) => {
        const imageData = imageModel.find({});
        if (imageData) {
            res.status(200).json({ imageData });
        }
        else {
            res.status(404).json({ message: "data dont exist" });
        }
    }
}