const express = require('express');
const router = express.Router();
const randomWYRQuestion = require('../model/wyr_questions');

router.get('/', function(req, res, next) {
    res.send('Placeholder for the home page')
});

router.get('/wyr', function(req, res, next) {
   // const wyr = {
   //     'question': 'Live in a circle house or a triangle house',
   //     'answer1': 'Circle house',
   //     'answer2': 'Triangle house',
   // }

    const wyr = randomWYRQuestion();

    // converts the object returned from the function to json and sends it to the response
   res.json(wyr);
});

module.exports = router;