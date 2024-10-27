const registerController = {
    showRegisterPage: (req, res) => {
        res.render('register'); // Отображение страницы регистрации
    },

    handleRegister: (req, res) => {
        const { username, email, password } = req.body;
        // Здесь должна быть логика по обработке регистрации (например, сохранение пользователя в БД)
        console.log('Регистрация:', { username, email, password });
        res.redirect('/'); // Перенаправление на главную страницу после регистрации
    },
};

module.exports = registerController;