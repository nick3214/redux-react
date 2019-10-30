const Product = require('../models/Product')

exports.getData = (req , res) => {
    Product.find()
    .then(product => 
        res.send({product})
    ).catch(err => 
        res.status(500).send({'message':err})
    )
}

exports.saveData = (req , res) => {
    const product = new Product( req.body )

    product.save()
    .then(product => 
        res.send({product})
    ).catch(err => 
        res.status(500).send({"message" : err})
    )
}

exports.updateData = (req , res) => {
    Product.findByIdAndUpdate(req.params.id, {
        pName: req.body.pName,
        pQuantity: req.body.pQuantity,
        pDescription: req.body.pDescription
    }).then(product => 
        res.send({product})
        ).catch(err => 
            res.status(500).send({"message" : err})
        )
}

exports.deleteData = (req , res) => {
    Product.findByIdAndDelete(req.params.id)
    .then(result => {
        return res.send({result})
    }).catch(err => {
        return res.send({'message':err})
    })
}