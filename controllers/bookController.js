const express = require('express');
const router = express.Router();
const db = require('../models/index');
const Book = db.Book;
const Author = db.Author;

//create a Book
router.post('/create', (req, res) => {
    const book = {
        bookName: req.body.bookName,
        isbn: req.body.isbn,
        authorId: req.body.authorId
    }
    Book.create(book).then((book) => {
        res.send(book)
    }).catch((err) => {
        res.sendStatus(500);
        console.log(err)
    });
});

//get a one Book
router.get('/:id', (req, res) => {
    Book.findByPk(req.params.id, {
        include: {
            model: Author,
            as: 'author',
            requiered: true,
        }
    }).then((book) => {
        res.send(book);
    }).catch((err) => console.log(err));
});

module.exports = router;

//get all Books
router.get('/', (req, res) => {
    Book.findAll({
        include: {
            model: Author,
            as: 'author',
            requiered: true,
        }
    }).then((books) => {
        res.send(books);
    }).catch((err) => console.log(err));
});

//update a book
router.put('/update/:id', (req, res) => {
    Book.update(
        req.body,
        { where: { bookId: req.params.id } }
    ).then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        res.sendStatus(500);
        console.log(err)
    })
});


//delete a book
router.delete('/delete/:id', (req, res) => {
    Book.destroy(
        { where: { bookId: req.params.id } }
    ).then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        res.sendStatus(500);
        console.log(err)
    })
});