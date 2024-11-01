const User = require('../models/Users')

const registerController = {
    showRegisterPage: (req, res) => {
        res.render('register'); // Отображение страницы регистрации
    },

    // Обработка данных регистрации (POST-запрос)
    handleRegister: async (req, res) => {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).send('Все поля обязательны для заполнения.');
        }

        const newUser = new User({
            username,
            email,
            password,
        });

        try {
            await newUser.save();
            res.status(201).send('Пользователь успешно зарегистрирован!');
        } catch (error) {
            if (error.code === 11000) {
                return res.status(400).send('Пользователь с таким email уже существует.');
            }
            res.status(500).send('Ошибка при регистрации пользователя: ' + error.message);
        }
    },
};
module.exports = registerController;
