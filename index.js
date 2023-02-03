const express = require('express');
const mongoose = require('mongoose');
const routesMoving = require('./routes/moving');
const routesContacts= require('./routes/contact');

const app = express();

app.use(express.json());

// database conection 

require('./env/connection');
// api endspoints
 app.use('/api/moving',routesMoving);
app.use('/api/contact',routesContacts);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})


