const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.mongoURI, {})
    .then(() => console.log('Успешно подключено к MongoDB'))
    .catch((error) => console.error('Ошибка подключения к MongoDB:', error));