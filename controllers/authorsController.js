const fs = require('fs');
const path = require('path');
const authorsFilePath = path.join(__dirname, '../models/authors.json');

const getAuthors = (req, res) => {
    const authors = JSON.parse(fs.readFileSync(authorsFilePath));
    res.json(authors);
};

const getAuthorById = (req, res) => {
    const authors = JSON.parse(fs.readFileSync(authorsFilePath));
    const author = authors.find(a => a.id === parseInt(req.params.id));
    if (author) {
        res.json(author);
    } else {
        res.status(404).json({ message: "Author not found" });
    }
};

const createAuthor = (req, res) => {
    const authors = JSON.parse(fs.readFileSync(authorsFilePath));
    const newAuthor = { id: Date.now(), ...req.body };
    authors.push(newAuthor);
    fs.writeFileSync(authorsFilePath, JSON.stringify(authors));
    res.status(201).json(newAuthor);
};

const updateAuthor = (req, res) => {
    const authors = JSON.parse(fs.readFileSync(authorsFilePath));
    const index = authors.findIndex(a => a.id === parseInt(req.params.id));
    if (index !== -1) {
        authors[index] = { id: authors[index].id, ...req.body };
        fs.writeFileSync(authorsFilePath, JSON.stringify(authors));
        res.json(authors[index]);
    } else {
        res.status(404).json({ message: "Author not found" });
    }
};

const deleteAuthor = (req, res) => {
    const authors = JSON.parse(fs.readFileSync(authorsFilePath));
    const filteredAuthors = authors.filter(a => a.id !== parseInt(req.params.id));
    fs.writeFileSync(authorsFilePath, JSON.stringify(filteredAuthors));
    res.status(204).send();
};

module.exports = {
    getAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor
};
