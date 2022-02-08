const router = require('express').Router();
const notes = require ("../../db/notes.json");
const fs = require('fs');
const path = require('path');

//unique id name
const uniqid = require('uniqid');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
})

router.post('/notes', (req, res) => {
    req.body.id = uniqid.time();
    console.log('req.body:', req.body)

    const note = req.body
    
    console.log('note:', note)

    notes.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'), 
        JSON.stringify(notes)
    )
    
    if(res) {
        console.log(`Post successful!`)
        return res.json()
    }
})

//destroy

module.exports = router;