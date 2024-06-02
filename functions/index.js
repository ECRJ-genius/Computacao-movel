/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const functions = require('fireebase-functions');
const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: false}));

app.post('/ussd',(req,res) => {
    
    //ler as variaveis enviadas via post da API
    const {
        sessionId.
        serviceCode,
        phoneNumber,
        text,
    } = req.body;

    let response = "";
    
})

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
   logger.info("Hello logs!", {structuredData: true});
   response.send("Bem vindo /n tudo bem?");
});
