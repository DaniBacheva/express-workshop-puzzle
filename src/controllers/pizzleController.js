const puzzleManager = require('../managers/puzzleManager');

const express = require('express');
const router = express.Router();

//path puzzles/create =>
router.get('/create', (req, res) => {
 console.log(puzzleManager.getAll());

    res.render('create');
});

router.post('/create', (req, res) => {
   const {
    name,
    imageUrl, 
    pieces,
    description
   } = req.body;

   puzzleManager.create ({
    name,
    imageUrl, 
    pieces: Number(pieces),
    description
   })

    res.redirect('/')
});


module.exports = router;
