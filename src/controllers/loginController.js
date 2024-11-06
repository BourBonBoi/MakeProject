const User = require('../models/Users'); // Импортирование модели пользователя
const bcrypt = require('bcryptjs');

const loginController = {
    showLoginPage: (req, res) => {
        res.render('login', { username: req.session.username || null });        
    },

    handleLogin: async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(401).send('Пользователь не найден');
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).send('Неверный пароль');
            }

            req.session.username = user.username; // Сохранение имени пользователя в сессии
            res.redirect('/'); // Перенаправление на главную страницу
        } catch (error) {
            console.error(error);
            res.status(500).send('Ошибка сервера');
        }
    },
};

module.exports = loginController;