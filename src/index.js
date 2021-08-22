require('./db/mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const Product = require('./model/product');
const Oferta = require('./model/oferta');

app.use(express.json());

// Crear un Producto en la DB
app.post('/product', (req, res) => {
    const product = new Product(req.body)
    product.save()
    .then(() => { 
        res.status(201).send(product);
    }) 
    .catch((err) => {
        res.status(400).send(err);
    });
});

// Mostrar todos los Productos
app.get('/products', (req, res) => {
    Product.find()
    .then((result) => {
        res.send(result);
    })
    .catch(err => res.status(404).send(err));
});

app.delete('/product/:id', (req, res) => {
    const _id = req.params.id;
    Product.deleteOne({ _id: _id })
        .then((result) => {
            res.send(result);
            console.log(result);
        })
        .catch(err => {
            res.send(err);-
            console.log(err)
        })
});

app.post('/oferta', (req, res) => {
    const oferta = new Oferta(req.body)
    oferta.save()
    .then(() => { 
        res.status(201).send(oferta);
    }) 
    .catch((err) => {
        res.status(400).send(err);
    });
});

app.get('/ofertas', (req, res) => {
    Oferta.find()
    .then((result) => {
        res.send(result);
    })
    .catch(err => res.status(404).send(err));
});

app.listen(port, () => {
    console.log(`Funcionando en http://localhost:${port}`);
});