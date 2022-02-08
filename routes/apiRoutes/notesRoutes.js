const router = require('express').Router();
const notes = require ("../../db/notes.json");
const fs = require('fs');
const path = require('path');

//unique id name
const uniqid = require('uniqid');

//get all the notes
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
})

//user input creates a note and creates a unique Id
router.post('/notes', (req, res) => {
    req.body.id = uniqid.time();

    //adds user note to array
    const note = req.body
    notes.push(note);
    //adds new array to json file
    fs.writeFileSync(
        path.join(__dirname, '../../db/notes.json'), 
        JSON.stringify(notes)
    )
    
    //if that was sussussful, return the notes
    if(res) {
        return res.json()
    }
})

//destroy

module.exports = router;