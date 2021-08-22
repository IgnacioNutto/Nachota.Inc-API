require('./db/mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const Destacado = require('./model/destacado');
const Oferta = require('./model/oferta');
const Producto = require('./model/producto');

app.use(express.json());

// POSTEAR, MOSTRAR Y ELIMINAR PRODUCTOS DE DESTACADOS

// Crear un DESTACADO en la DB
app.post('/destacado', (req, res) => {
    const destacado = new Destacado(req.body)
    product.save()
    .then(() => { 
        res.status(201).send(destacado);
    }) 
    .catch((err) => {
        res.status(400).send(err);
    });
});

// Mostrar todos los Destacados
app.get('/destacados', (req, res) => {
    Destacado.find()
    .then((result) => {
        res.send(result);
    })
    .catch(err => res.status(404).send(err));
});

// Eliminar UN Destacado mediante ID
app.delete('/destacado/:id', (req, res) => {
    const _id = req.params.id;
    Destacado.deleteOne({ _id: _id })
        .then((result) => {
            res.send(result);
            console.log(result);
        })
        .catch(err => {
            res.send(err);
            console.log(err)
        })
});

// POSTEAR, MOSTRAR Y ELIMINAR PRODUCTOS DE OFERTAS

// Crear una Oferta en la DB
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

// Mostrar todas los Ofertas
app.get('/ofertas', (req, res) => {
    Oferta.find()
    .then((result) => {
        res.send(result);
    })
    .catch(err => res.status(404).send(err));
});

// Eliminar UNA Oferta mediante ID
app.delete('/oferta/:id', (req, res) => {
    const _id = req.params.id;
    Oferta.deleteOne({ _id: _id })
        .then((result) => {
            res.send(result);
            console.log(result);
        })
        .catch(err => {
            res.send(err);
            console.log(err)
        })
});

// POSTEAR, MOSTRAR Y ELIMINAR PRODUCTOS DE PRODUCTOS

// Crear UN PRODUCTO en la DB
app.post('/producto', (req, res) => {
    const producto = new Producto(req.body)
    producto.save()
    .then(() => { 
        res.status(201).send(producto);
    }) 
    .catch((err) => {
        res.status(400).send(err);
    });
});

// Mostrar todas los PRODUCTOS de PRODUCTOS
app.get('/productos', (req, res) => {
    Producto.find()
    .then((result) => {
        res.send(result);
    })
    .catch(err => res.status(404).send(err));
});

// Eliminar UN Producto mediante ID
app.delete('/producto/:id', (req, res) => {
    const _id = req.params.id;
    Producto.deleteOne({ _id: _id })
        .then((result) => {
            res.send(result);
            console.log(result);
        })
        .catch(err => {
            res.send(err);
            console.log(err)
        })
});

app.listen(port, () => {
    console.log(`Funcionando en http://localhost:${port}`);
});