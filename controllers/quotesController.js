const fs = require('fs');
const path = require('path');
const quotesFilePath = path.join(__dirname, '../models/quotes.json');

const getQuotes = (req, res) => {
    const quotes = JSON.parse(fs.readFileSync(quotesFilePath));
    res.json(quotes);
};

const getQuoteById = (req, res) => {
    const quotes = JSON.parse(fs.readFileSync(quotesFilePath));
    const quote = quotes.find(q => q.id === parseInt(req.params.id));
    if (quote) {
        res.json(quote);
    } else {
        res.status(404).json({ message: "Quote not found" });
    }
};

const createQuote = (req, res) => {
    const quotes = JSON.parse(fs.readFileSync(quotesFilePath));
    const newQuote = { id: Date.now(), ...req.body };
    quotes.push(newQuote);
    fs.writeFileSync(quotesFilePath, JSON.stringify(quotes));
    res.status(201).json(newQuote);
};

const updateQuote = (req, res) => {
    const quotes = JSON.parse(fs.readFileSync(quotesFilePath));
    const index = quotes.findIndex(q => q.id === parseInt(req.params.id));
    if (index !== -1) {
        quotes[index] = { id: quotes[index].id, ...req.body };
        fs.writeFileSync(quotesFilePath, JSON.stringify(quotes));
        res.json(quotes[index]);
    } else {
        res.status(404).json({ message: "Quote not found" });
    }
};

const deleteQuote = (req, res) => {
    const quotes = JSON.parse(fs.readFileSync(quotesFilePath));
    const filteredQuotes = quotes.filter(q => q.id !== parseInt(req.params.id));
    fs.writeFileSync(quotesFilePath, JSON.stringify(filteredQuotes));
    res.status(204).send();
};

module.exports = {
    getQuotes,
    getQuoteById,
    createQuote,
    updateQuote,
    deleteQuote
};
