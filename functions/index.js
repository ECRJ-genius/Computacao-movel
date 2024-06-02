/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require('firebase-functions/v2/https');
 * const {onDocumentWritten} = require('firebase-functions/v2/firestore');
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require('firebase-functions/v2/https');
// const logger = require('firebase-functions/logger');
const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: false}));

app.post('/DEEG',(req,res) => {
    
    //ler as variaveis enviadas via post da API
    const {
        sessionId,
        serviceCode,
        phoneNumber,
        text,
    } = req.body;

    let response = "";

    // if (text == '') {
    //     response = 'CON What would you like to check?\n' +
    //     '1. My Account\n' +
    //     '2. My phone Number';

    // } else if (text == '1') {
    //     response = 'CON Choose account information you want to view\n' +
    //     '1. Account Number\n' +
    //     '2. Account Balance';

    // } else if (text == '2') {
    //     response = 'END Your phone number is ' + phoneNumber;

    // } else if (text == '1*1') {
    //     const accountNumber = 'AKOKDE';
    //     response = 'END Your account number is ' + accountNumber;
    // } else if (text == '1*2') {
    //     const accountBalance = '420,690.00 MT';
    //     response = 'END Your account balance is ' + accountBalance;
    // }

    //Send the response back to API
    res.set('Content-Type: text/plain');
    res.send(response);
    
});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.ussd = functions.https.onRequest(app);