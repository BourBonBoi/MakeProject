const User = require('../models/Users'); // Импортирование модели пользователя

const userController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find(); // Получение всех пользователей
            res.render('users', { username: req.session.username || null, users }); // Передача пользователей в шаблон
        } catch (error) {
            console.error(error);
            res.status(500).send('Ошибка сервера');
        }
    },
};

module.exports = userController;