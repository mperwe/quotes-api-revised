const express = require('express');
const morgan = require('morgan');
const logger = require('./middleware/logger');

const authorsRoutes = require('./routes/authorsRoutes');
const quotesRoutes = require('./routes/quotesRoutes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(logger);

app.use('/authors', authorsRoutes);
app.use('/quotes', quotesRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
