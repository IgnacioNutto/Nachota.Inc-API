require('./db/mongoose');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const Product = require('./model/product');

app.use(express.json());

app.post('/product', (req, res) => {
    console.log(req.body);

    // Instancio un nuevo producto
    const product = new Product(req.body)
    product.save()
        .then(() => { 
            res
                .status(201)
                .send(product);
        }) 
        .catch( (err) => {
            res
                .status(400)
                .send(err);
        });
});

app.get('/products', (req, res) => {
    Product
        .find()
        .then((result) => {
            res.send(result);
        })
        .catch(err => res.status(404).send(err));
});

app.get('/product/:id', (req, res) => {
    const _id = req.params.id;
    // Me busco un producto en la DB por su ID
    Product.findById(_id)
    .then((product) => {
        // Si no lo encuentro
        if(!product) {
            return res.status(404).send("Product not found");
        }
        // Si lo encuentro, mando un 200 y el resultado
        res.status(200).send(product)
    }) 
    // Si no lo encuentro, mando un 404 y un error
    .catch(err => {
        const validId = mongoose.Types.ObjectId.isValid(_id);
        if(!validId) {
          return res.status(501).send(err);
        }
        res.status(500).send(err)
      })  
});



app.listen(3000, () => {
    console.log('Escuchando puerto 3000');
}) 