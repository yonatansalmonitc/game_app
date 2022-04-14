const express = require('express');

const app = express();


app.use('/notes', notesRoute)

app.listen(8000, () => {
    console.log('Listening')
})