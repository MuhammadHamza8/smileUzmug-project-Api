 const Model = require('../models/moving');

 exports.postMoving = async (req, res) => {
     const data = new Model({
       
        address: req.body.address,
         postal_code: req.body.postal_code,
         city: req.body.city,
         state: req.body.state,
         date: Date( req.body.date),
         rooms: req.body.rooms,
         floors: req.body.floors
     })

     try {
         const dataToSave = await data.save();
         res.status(200).json(dataToSave)
        
     }
     catch (error) {
         res.status(400).json({message: error.message})
  }
}

exports.getAll= async(req, res) => {

    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}


exports.getOne =async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}


exports.update = async(req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}


exports.delete =async(req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}