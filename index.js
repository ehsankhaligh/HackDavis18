const express = require('express');
const app = express();
const path = require('path');
const admin = require("firebase-admin");

const serviceAccount = require("./firebase_key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tutortimetable.firebaseio.com"
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('Hello World!'));


app.listen(3000, () => console.log('Example app listening on port 3000!'))
