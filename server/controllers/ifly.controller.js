const iFly = require("../models/ifly.model")

module.exports.findAlliFlys = (req, res) => {
    iFly.find().sort('name')
        .then(alliFlys => res.json({ iFlys: alliFlys }))
        .catch(err => res.json({ message: "something went wrong", error: err }))
}

module.exports.findSingleiFly = (req, res) => {
    iFly.findOne({ _id: req.params.id })
        .then(singleiFly => res.json({ iFly: singleiFly }))
        .catch(err => res.status(400).json(err))
}

module.exports.createNewiFly = (req, res) => {
    iFly.create(req.body)
        .then(newiFly => res.json({ iFly: newiFly }))
        .catch(err => res.status(400).json(err))
}

module.exports.updateiFly = (req, res) => {
    iFly.findByIdAndUpdate(req.params.id, req.body, { new: true,runValidators:true})
        .then(updatediFly => res.json({ ifly: updatediFly }))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteiFly = (req, res) => {
    iFly.deleteOne({ _id: req.params.id })
        .then(deletediFly => res.json({ ifly: deletediFly }))
        .catch(err => res.json({ message: "something went wrong", error: err }))
}

module.exports.findRandom = (req, res) => {
    iFly.countDocuments()
        .then(count => {
            var random = Math.floor(Math.random() * count)
            // skip() to skip docs equal to random number 
            // if random =1 , skip will skip first doc and find one will return second doc
            iFly.findOne().skip(random)
                .then(randomiFly => res.json({ iFly: randomiFly }))
                .catch(err => res.json({ message: "something went wrong", error: err }))
        })
        .catch(err => res.json({ message: "something went wrong", error: err }))

}