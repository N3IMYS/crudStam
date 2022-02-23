const express = require('express');
const router = express.Router();
const db = require('../models/index');
const Author = db.Author;


///////////routes
//getAll
router.get('/', (req, res) => {
    Author.findAll().then((authors) => {
        res.send(authors);
    }).catch((err) => console.log(err));
    // Author.create({authorId: 1, firstName: 'Bob', lastName: 'Harington', birthDay: new Date()}).then((author)=>{
    //     console.log(author);
    // }).catch((err) => console.log(err));
});

//getOne
router.get('/:id', (req, res) => {
    Author.findByPk(req.params.id).then((author) => {
        res.send(author);
    }).catch((err) => console.log(err));
});


//createAuthor
router.post('/create', (req, res) => {
    const author = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthDay: new Date(),
    }
    Author.create(author).then((author) => {
        res.send(author)
    }).catch((err) => {
        res.sendStatus(500);
        console.log(err)
    });
});

//updateAuthor
router.put('/update/:id', (req, res) => {
    Author.update(
        req.body,
        { where: { authorId: req.params.id } }
    ).then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        res.sendStatus(500);
        console.log(err)
    });
});


//deleteAuthor 
router.delete('/delete/:id', (req, res) => {
    Author.destroy(
        { where: { authorId: req.params.id } }
    ).then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        res.sendStatus(500);
        console.log(err)
    });
});

module.exports = router;