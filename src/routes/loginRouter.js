const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// Отображение страницы логина
router.get('/', loginController.showLoginPage);

// Обработка данных регистрации (POST-запрос)
router.post('/', loginController.handleLogin);

module.exports = router;