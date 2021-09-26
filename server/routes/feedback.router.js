const express = require('express');
const router = express.Router();
const pg = require('pg');
const pool = require('../modules/pool')


// POST to DB
router.post('/', (req, res) => {
        //2 add a console
    let feedbackToAdd = req.body;
    console.log('this is feedbackToAdd', feedbackToAdd);
    let sqlText = `INSERT INTO feedback ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;
    pool.query(sqlText, [feedbackToAdd.feeling,
                        feedbackToAdd.understanding,
                        feedbackToAdd.support,
                        feedbackToAdd.comment])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            //2 add a console
        res.sendStatus(500);
    })
});

module.exports = router;