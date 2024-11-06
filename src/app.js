const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config/config');
const mongoose = require('./config/db');  
const indexRouter = require('./routes/index');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const aboutRouter = require('./routes/about');

const app = express();

// Поддержка статических файлов
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Использование сессий
app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true
}));


// Middleware для парсинга данных из форм
app.use(express.urlencoded({ extended: true }));

// Использование маршрутов
app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/about', aboutRouter);

// Запуск сервера
app.listen(config.port, () => {
    console.log(`Сервер запущен на http://localhost:${config.port}`);
});