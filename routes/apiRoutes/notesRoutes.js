const {notes} = require ('../../db/notes');

const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.json(notes);
});

//by id

//add

//destroy