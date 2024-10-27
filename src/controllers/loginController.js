const loginController = {
    showLoginPage: (req, res) => {
        res.render('login'); // Отображение страницы авторизации
    },

    handleLogin: (req, res) => {
        const { username, email, password } = req.body;
        // Здесь должна быть логика по обработке авторизации
        console.log('Авторизация:', { username, email, password });
        res.redirect('/'); // Перенаправление на главную страницу после регистрации
    },
};

module.exports = loginController;