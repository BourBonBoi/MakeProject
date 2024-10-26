const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();

// Подключение статических файлов
app.use(express.static(path.join(__dirname, '../public')));

// Подключение маршрутов
app.use('/', indexRouter);


// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});