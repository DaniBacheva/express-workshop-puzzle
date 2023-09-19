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

router.get('/:puzzleID/details', (req,res)=> {
    const puzzleId = req.params.puzzleID;
    const puzzle = puzzleManager.getAll().find(p=>p.id==puzzleId);

    if (!puzzle) {
        return res.redirect('404')
    }

    res.render('details', {puzzle})
})


module.exports = router;
