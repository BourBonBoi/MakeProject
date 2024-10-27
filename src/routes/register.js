const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

// Отображение страницы регистрации
router.get('/', registerController.showRegisterPage);

// Обработка данных регистрации (POST-запрос)
router.post('/', registerController.handleRegister);

module.exports = router;