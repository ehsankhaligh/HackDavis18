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

  admin.database().ref(`tutors/${school}/${department}/`)
  .once('value', (data) => {
    let tutors = Object.keys(data.val())
    .filter(tutor => data.val()[tutor].courses[req.body.course]);

    console.log(tutors);

    admin.database().ref(`queues/${school}/${department}/`)
    .once('value', (data) => {
      for (let hour of [10, 11, 12, 13, 14, 15, 16, 17]) {
        for (let minute of ['00', '15', '30', '45']) {
          for (let tutor of tutors) {
            if (!data.val()[tutor][hour + ':' + minute]) {
              admin.database().ref(
                  `queues/${school}/${department}/${tutor}/${hour}:${minute}/`).set(
                  req.body.name, () => {
                    res.status(200);
                    res.send({tutor: tutor, time: hour + ':' + minute});
                  });
            }
            return;
          }
        }
      }

      res.status(400);
      res.send('no_tutor');
    });
  });
  // admin.database().ref(`queues/${school}/${department}/${tutor}/`).(req.body.msg);
  // res.send({school: school, department: department});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
