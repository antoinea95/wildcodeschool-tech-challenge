const Argonautes = require('../models/argonautes');

exports.getAllArgonautes = (req,res) => {
    Argonautes.find()
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json({err}))
}

exports.createArgonautes = (req, res) => {
    const argonautes = new Argonautes ({
        prenom: req.body.prenom
    })

    argonautes.save()
        .then(() => res.status(201).json({message: "Bienvenue à bord"}))
        .catch(error => res.status(400).json({error}));
}