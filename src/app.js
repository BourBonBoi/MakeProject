const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config/config');
const mongoose = require('./config/db');  

// Руты для использования в маршрутах
const indexRouter = require('./routes/indexRouter');
const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');
const aboutRouter = require('./routes/aboutRouter');
const usersRouter = require('./routes/usersRouter');

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

//Middleware для парсинга данных из форм
app.use(express.urlencoded({ extended: true }));

// Использование маршрутов
app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/about', aboutRouter);
app.use('/users', usersRouter);


// Запуск сервера
app.listen(config.port, () => {
    console.log(`Сервер запущен на http://localhost:${config.port}`);
});