const express = require("express")
const path = require("path");
const PORT = process.env.PORT || 3001;
const cookieParser = require('cookie-parser');

require('dotenv').config();

let app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var firebase = require("firebase/app");

require("firebase/auth");
require("firebase/database");

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain:process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

app.get("*", (req, res) => {
    firebase.database().ref('users/').set({
        notes: "TEST"
      });
    res.sendFile(path.join(__dirname, "./client/dist/cubeNotes/index.html"));
  });
  
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
  