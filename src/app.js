const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

const app = express();
const PORT = process.env.PORT || 3000;

// Поддержка статических файлов
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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