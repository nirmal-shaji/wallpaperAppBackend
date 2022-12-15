const imageModel=require('../model/imageSchema')

module.exports = {
    dashboard: (req, res) => {
        console.log("reached here")
        res.render('admin/addImage');
       
    },
    addImage: async (req, res) => {
        console.log(req.body);
        const arrImages = req.files.map((value) => value.filename);
        req.body.imagepath = arrImages;
        const imageData = await imageModel.create(req.body);
        res.json({imageData})
    }
}