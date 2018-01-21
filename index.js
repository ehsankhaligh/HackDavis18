const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');
const admin = require("firebase-admin");

const serviceAccount = require("./firebase_key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tutortimetable.firebaseio.com"
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/api/:school/:department/', (req, res) => {
  let school = req.params.school;
  let department = req.params.department;
  let tutor_id = 'tutor_id';

  admin.database().ref(`queues/${school}/${department}/${tutor_id}`).push(req.body.msg);
  res.send({ school: school, department: department });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
