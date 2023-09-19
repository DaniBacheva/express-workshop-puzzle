const express = require('express');
const router = express.Router();

const puzzleManager = require ('../managers/puzzleManager')

router.get('/', (req,res)=> {

    const puzzles = puzzleManager.getAll();
    res.render('index', {puzzles})
});

router.get('/about', (req,res)=> {
    res.render('about')
});

router.get('/404', (req,res) => {
    res.render('404')
});


module.exports = router;