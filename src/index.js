require('./db/mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const Product = require('./model/product');

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

app.listen(port, () => {
    console.log(`Funcionando en http://localhost:${port}`);
});