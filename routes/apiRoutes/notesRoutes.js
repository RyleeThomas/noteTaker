const router = require('express').Router();
const notes = require ("../../db/notes.json");
const fs = require('fs');
const path = require('path');

function createNewNote (body, noteArray) {
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../../db/notes.json'),
        JSON.stringify({noteArray}, null, 2)
    )
    return note;
}

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
})

router.post('/notes', (req, res) => {
    //set id based on what the next index of the array will be
    req.body.id = 1;

    //add note to json file 
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
})

//destroy

module.exports = router;