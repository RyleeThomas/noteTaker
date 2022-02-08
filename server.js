const express = require('express');
const {notes} = require('./db/notes');
const PORT = process.env.PORT || 3001;

const app = express();

//app incoming string or array data
app.use(express.urlencoded({extended: true}));
//pare incoming JSON data
app.use(express.json());

//instruscts the server to make certain files readily available
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});