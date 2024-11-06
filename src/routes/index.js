const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    const username = req.session.username || 'Гость';
    res.render('index', { username });
});

module.exports = router;