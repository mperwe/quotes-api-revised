const fs = require('fs');
const path = require('path');

const logger = (req, res, next) => {
    const log = `${new Date().toISOString()} - ${req.method} ${req.originalUrl} ${res.statusCode}\n`;
    fs.appendFileSync(path.join(__dirname, '../logs/request_logs.txt'), log);
    next();
};

module.exports = logger;
