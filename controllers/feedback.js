const path = require('path');

const rootDir = require('../util/path');

exports.success = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
}

exports.err404 = (req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
}