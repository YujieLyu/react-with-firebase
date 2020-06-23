const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const app = require('express')();

const cors = require('cors');
app.use(cors());

const {
    getAllTodos
} = require('./APIs/todos');

const { response } = require('express');

app.get('/todos', getAllTodos);

const {
    postOneTodo
} = require('./APIs/todos')

app.post('/todo', postOneTodo)

exports.api = functions.https.onRequest(app);
