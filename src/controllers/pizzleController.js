const express = require('express');

const router = express.Router();

//path puzzles/create =>
router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    console.log(req.body);
    res.redirect('/')
});


module.exports = router;
