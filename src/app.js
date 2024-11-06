const express = require('express');
const session = require('express-session');
const path = require('path');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

const app = express();
const PORT = process.env.PORT || 3000;

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/MakeProject', {

})
.then(() => {
    console.log('Успешно подключено к MongoDB');
})
.catch((error) => {
    console.error('Ошибка подключения к MongoDB:', error);
});

// Поддержка статических файлов
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Использование сессий
app.use(session({
    secret: '228',
    resave: false,
    saveUninitialized: true
}));


// Middleware для парсинга данных из форм
app.use(express.urlencoded({ extended: true }));

// Использование маршрутов
app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});