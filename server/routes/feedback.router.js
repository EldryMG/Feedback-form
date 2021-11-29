const express = require('express');
const router = express.Router();
const pg = require('pg');
const pool = require('../modules/pool')


// POST Add feedback object to DB
router.post('/', (req, res) => {
        console.log('SERVER SIDE DATA', req.body)
    let feedbackToAdd = req.body;
    console.log('this is feedbackToAdd', feedbackToAdd);
    let sqlText = `INSERT INTO feedback ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;
    pool.query(sqlText, [feedbackToAdd.feeling,
                        feedbackToAdd.understanding,
                        feedbackToAdd.support,
                        feedbackToAdd.comments])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
        console.log('SERVER SIDE ERROR', error)
        res.sendStatus(500);
    })
});

//GET from DB
router.get('/', (req, res) => {
    // console.log('IN SERVER-SIDE GET');
    pool.query('SELECT * from "feedback";')
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback',error)
        res.sendStatus(500);
    })
})

//Update Admin button -- changed boolean value of flagged status at object with provided id.
router.put('/:id', (req,res) => {
    console.log('in PUT, req.body.bool', req.body.bool);
    console.log('in PUT, req.params.id', req.params.id);
//Feedback boolean
    const feedbackBool = req.body.bool;
//Feedback id
    const feedbackId = req.params.id;

    const queryText =  `UPDATE "feedback" 
                        SET "flagged" = $1 
                        WHERE "id" = $2;`;
    pool.query(queryText, [feedbackBool, feedbackId]).then((result) => {
        console.log('PUT-updated flagged to', feedbackBool);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('ROUTER SIDE', error);
        res.sendStatus(500);
    });
});


module.exports = router;