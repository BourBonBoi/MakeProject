const express = require('express');
const userController = require('../controllers/userController'); // Импортируйте контроллер пользователей
const router = express.Router();

router.get('/', userController.getAllUsers); // Указываем метод для обработки запроса на главной странице пользователей

module.exports = router;